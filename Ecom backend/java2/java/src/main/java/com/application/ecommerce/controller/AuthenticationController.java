package com.application.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.ecommerce.dto.JwtAuthenticationResponse;
import com.application.ecommerce.dto.RefreshTokenRquest;
import com.application.ecommerce.dto.SignInRequest;
import com.application.ecommerce.dto.SingUpRequest;
import com.application.ecommerce.entities.User;
import com.application.ecommerce.service.AuthenticationService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthenticationController {
	private final AuthenticationService authenticationService;
	
	@Autowired
    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }
	
	@PostMapping("/signup")
	public ResponseEntity<User> signup(@RequestBody SingUpRequest singUpRequest){
		return ResponseEntity.ok(authenticationService.signup(singUpRequest));
	}
	
	@PostMapping("/signin")
	public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SignInRequest singInRequest){
		System.out.println("************* came here working this ******");
		return ResponseEntity.ok(authenticationService.signin(singInRequest));
	}
	
	@PostMapping("/refresh")
	public ResponseEntity<JwtAuthenticationResponse> refresh(@RequestBody RefreshTokenRquest refreshTokenRquest){
		return ResponseEntity.ok(authenticationService.refreshToken(refreshTokenRquest));
	}
	
	@PostMapping("/adminsignup")
	public ResponseEntity<User> adminsingup(@RequestBody SingUpRequest singUpRequest){
		return ResponseEntity.ok(authenticationService.adminsingup(singUpRequest));
	}
}
