package com.application.ecommerce.impl;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.application.ecommerce.dto.JwtAuthenticationResponse;
import com.application.ecommerce.dto.RefreshTokenRquest;
import com.application.ecommerce.dto.SignInRequest;
import com.application.ecommerce.dto.SingUpRequest;
import com.application.ecommerce.entities.Role;
import com.application.ecommerce.entities.User;
import com.application.ecommerce.repository.UserRepository;
import com.application.ecommerce.service.AuthenticationService;
import com.application.ecommerce.service.JWTService;

import lombok.RequiredArgsConstructor;

@Service

public class AuthenticationServiceImpl implements AuthenticationService {
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	
	private final AuthenticationManager authenticationManager;
	
	private final JWTService jwtService;
	
	@Autowired
	public AuthenticationServiceImpl(UserRepository userRepository, 
			PasswordEncoder passwordEncoder,
			AuthenticationManager authenticationManager,
			JWTService jwtService) {
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
		this.authenticationManager = authenticationManager;
		this.jwtService = jwtService;
	}
	
	public User signup(SingUpRequest singUpRequest) {
		User user = new User();
		user.setEmail(singUpRequest.getEmail());
		user.setFirstName(singUpRequest.getFirstName());
		user.setLastName(singUpRequest.getLastName());
		user.setRole(Role.USER);
		user.setPassword(passwordEncoder.encode(singUpRequest.getPassword()));
		return userRepository.save(user);
	}
	
	public User adminsingup(SingUpRequest singUpRequest) {
		User user = new User();
		user.setEmail(singUpRequest.getEmail());
		user.setFirstName(singUpRequest.getFirstName());
		user.setLastName(singUpRequest.getLastName());
		user.setRole(Role.ADMIN);
		user.setPassword(passwordEncoder.encode(singUpRequest.getPassword()));
		return userRepository.save(user);
	}
	
	public JwtAuthenticationResponse signin(SignInRequest singUpRequest) {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						singUpRequest.getEmail(), singUpRequest.getPassword()));
		var user = userRepository.findByEmail(singUpRequest.getEmail())
				.orElseThrow(()-> new IllegalArgumentException("invalid email or password"));
		var jwt = jwtService.generateToken(user);
		var refreshToken = jwtService.generateRefreshToken(new HashMap<>(), user);
		JwtAuthenticationResponse jwtAuthenticationResponse = new JwtAuthenticationResponse();
		jwtAuthenticationResponse.setToken(jwt);
		jwtAuthenticationResponse.setRefreshToken(refreshToken);
		return jwtAuthenticationResponse;
	}
	
	public JwtAuthenticationResponse refreshToken(RefreshTokenRquest refreshTokenRquest ) {
		String userEmail = jwtService.extractUserName(refreshTokenRquest.getToken());
		User user = userRepository.findByEmail(userEmail).orElseThrow();
		if(jwtService.isTokenValid(refreshTokenRquest.getToken(), user)) {
			var jwt = jwtService.generateToken(user);
			JwtAuthenticationResponse jwtAuthenticationResponse = new JwtAuthenticationResponse();
			jwtAuthenticationResponse.setToken(jwt);
			jwtAuthenticationResponse.setRefreshToken(refreshTokenRquest.getToken());
			return jwtAuthenticationResponse;
		}
		return null;
	}
}
