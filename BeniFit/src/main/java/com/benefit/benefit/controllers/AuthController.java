package com.benefit.benefit.controllers;

import com.benefit.benefit.dto.AdminDTO;
import com.benefit.benefit.dto.AthleteDTO;
import com.benefit.benefit.dto.LoginRequestDTO;
import com.benefit.benefit.dto.LoginResponse;
import com.benefit.benefit.enums.Role;
import com.benefit.benefit.model.User;
import com.benefit.benefit.services.AuthenticationService;
import com.benefit.benefit.services.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final JwtService jwtService;
    private final AuthenticationService authenticationService;

    @Autowired
    public AuthController(JwtService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signup")
    public ResponseEntity<User> register(@RequestBody AthleteDTO customerDTO) {
        User registeredUser = authenticationService.signup(customerDTO);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/add-admin")
    public ResponseEntity<User> addAdmin(@RequestBody AdminDTO adminDTO) {
        User newAdmin = authenticationService.addAdmin(adminDTO);
        return ResponseEntity.ok(newAdmin);
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@RequestBody LoginRequestDTO loginUserDto) {
        try {
            User authenticatedUser = authenticationService.authenticate(loginUserDto);
            Role role = authenticatedUser.getRole();
            Long userId = authenticatedUser.getId();

            String jwtToken = jwtService.generateToken(authenticatedUser, userId, role);

            LoginResponse loginResponse = new LoginResponse();
            loginResponse.setToken(jwtToken);
            loginResponse.setExpiresIn(jwtService.getExpirationTime());

            return ResponseEntity.ok(loginResponse);
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during login.");
        }
    }
}