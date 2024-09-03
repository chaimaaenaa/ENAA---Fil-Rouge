package com.benefit.benefit.controllers;

import com.fitlifepro.dtos.UserDTO;
import com.fitlifepro.entities.User;
import com.fitlifepro.services.UserService;
import com.fitlifepro.mappers.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserMapper userMapper;

    @GetMapping("/{email}")
    public UserDTO getUserByEmail(@PathVariable String email) {
        Optional<User> user = userService.findByEmail(email);
        return user.map(userMapper::toDTO).orElse(null);
    }

    @PostMapping
    public UserDTO createUser(@RequestBody UserDTO userDTO) {
        User user = userMapper.toEntity(userDTO);
        User savedUser = userService.save(user);
        return userMapper.toDTO(savedUser);
    }
}
