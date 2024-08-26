package com.application.ecommerce.service;

import com.application.ecommerce.dto.JwtAuthenticationResponse;
import com.application.ecommerce.dto.RefreshTokenRquest;
import com.application.ecommerce.dto.SignInRequest;
import com.application.ecommerce.dto.SingUpRequest;
import com.application.ecommerce.entities.User;

public interface AuthenticationService {
	User signup(SingUpRequest singUpRequest);
	JwtAuthenticationResponse signin(SignInRequest singInRequest);
	JwtAuthenticationResponse refreshToken(RefreshTokenRquest refreshTokenRquest);
	User adminsingup(SingUpRequest singUpRequest);
}
