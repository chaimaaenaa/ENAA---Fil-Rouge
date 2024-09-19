package com.benefit.benefit.security;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

@Component
public class JwtTokenProvider {

    public String generateToken(Authentication authentication) {
        // kaygenerate JWT token
    }

    public boolean validateToken(String token) {
        // kayvalidate l-token
    }
}
