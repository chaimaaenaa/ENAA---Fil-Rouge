package com.benefit.benefit.controllers;

import com.benefit.benefit.dto.UserDTO;

import com.benefit.benefit.model.User;
import com.benefit.benefit.mappers.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserMapper userMapper;

    @PostMapping("/register")
    public UserDTO register(@RequestBody UserDTO userDTO) {
        User user = userMapper.toEntity(userDTO);
        User registeredUser = authService.registerUser(user);
        return userMapper.toDTO(registeredUser);
    }
}
