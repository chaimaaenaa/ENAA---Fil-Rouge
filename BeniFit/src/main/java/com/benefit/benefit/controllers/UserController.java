package com.benefit.benefit.controllers;

import com.benefit.benefit.dto.UserDTO;
import com.benefit.benefit.services.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody UserDTO userDTO) {
        User user = userService.register(userDTO);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        String token = userService.login(loginRequest);
        return ResponseEntity.ok(token);
    }

    @PutMapping("/update")
    public ResponseEntity<User> updateProfile(@RequestBody UserDTO userDTO) {
        User updatedUser = userService.updateProfile(userDTO);
        return ResponseEntity.ok(updatedUser);
    }
}
