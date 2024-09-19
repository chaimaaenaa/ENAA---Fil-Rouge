package com.benefit.benefit.services;

import com.benefit.benefit.dto.UserDTO;
import com.benefit.benefit.dto.LoginRequest;
import com.benefit.benefit.mappers.UserMapper;
import com.benefit.benefit.model.User;
import com.benefit.benefit.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserMapper userMapper;

    public User register(UserDTO userDTO) {
        User user = userMapper.toEntity(userDTO);
        // Kat-encode l-password qbal l-save
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        return userRepository.save(user);
    }

    public String login(LoginRequest loginRequest) {
        // Login logic: kat9lb 3la user b-email
        Optional<User> optionalUser = userRepository.findByEmail(loginRequest.getEmail());
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            // Kayverify wach l-password hiya lmchfrada mzyan
            if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                // Return JWT token (hla tbddelha b JWT)
                return "JWT_TOKEN_HERE";
            }
        }
        throw new RuntimeException("Invalid credentials");
    }

    public User updateProfile(UserDTO userDTO) {
        Optional<User> optionalUser = userRepository.findById(userDTO.getId());
        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
            existingUser.setName(userDTO.getName());
            existingUser.setEmail(userDTO.getEmail());
            existingUser.setPhoneNumber(userDTO.getPhoneNumber());
            existingUser.setGender(userDTO.getGender());
            // Password ghadi mat-tbdlach, khssek method fardiya l-update dyalha ila khssha ttbdl
            return userRepository.save(existingUser);
        }
        throw new RuntimeException("User not found");
    }
}
