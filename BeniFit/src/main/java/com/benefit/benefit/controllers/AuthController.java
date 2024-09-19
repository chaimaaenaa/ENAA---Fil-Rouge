package com.benefit.benefit.controllers;

import com.benefit.benefit.dto.UserDTO;
import com.benefit.benefit.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser(@RequestBody UserDTO userDTO, @RequestParam String password) {
        UserDTO createdUser = userService.createUser(userDTO, password);
        return ResponseEntity.ok(createdUser);
    }

    // Add login endpoint
}