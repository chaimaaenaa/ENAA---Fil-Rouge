package com.fitlifepro.controllers;

import com.fitlifepro.dtos.UserDTO;
import com.fitlifepro.entities.User;
import com.fitlifepro.services.UserService;
import com.fitlifepro.mappers.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserMapper userMapper;

    // Create User
    @PostMapping
    public UserDTO createUser(@RequestBody UserDTO userDTO) {
        User user = userMapper.toEntity(userDTO);
        User savedUser = userService.save(user);
        return userMapper.toDTO(savedUser);
    }

    // Get All Users
    @GetMapping
    public List<UserDTO> getAllUsers() {
        return userService.findAll().stream()
                .map(userMapper::toDTO)
                .toList();
    }

    // Get User by ID
    @GetMapping("/{id}")
    public UserDTO getUserById(@PathVariable Long id) {
        Optional<User> user = userService.findById(id);
        return user.map(userMapper::toDTO).orElse(null);
    }

    // Update User
    @PutMapping("/{id}")
    public UserDTO updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
        Optional<User> existingUser = userService.findById(id);
        if (existingUser.isPresent()) {
            User user = userMapper.toEntity(userDTO);
            user.setId(id); // Ensure the ID is set
            User updatedUser = userService.update(user);
            return userMapper.toDTO(updatedUser);
        }
        return null;
    }

    // Delete User
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteById(id);
    }
}
