package com.benefit.benefit.services;

import com.benefit.benefit.dto.LoginRequestDTO;
import com.benefit.benefit.dto.UserDTO;
import com.benefit.benefit.model.User;
import com.benefit.benefit.repositories.UserRepository;
import com.benefit.benefit.mappers.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

//    public User register(UserDTO userDTO) {
//        if (userRepository.existsByEmail(userDTO.getEmail())) {
//            throw new RuntimeException("Email already exists");
//        }
//
//        User user = userMapper.toEntity(userDTO);
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//
//        return userRepository.save(user);
//    }
//
//    public String login(LoginRequestDTO loginRequest) {
//        try {
//            Authentication authentication = authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
//            );
//
//            if (authentication.isAuthenticated()) {
//                User user = userRepository.findByUsername(loginRequest.getUsername())
//                        .orElseThrow(() -> new RuntimeException("User not found"));
//                return jwtService.generateToken(user.getUsername());
//            } else {
//                throw new RuntimeException("Invalid username or password");
//            }
//        } catch (AuthenticationException e) {
//            throw new RuntimeException("Invalid username or password");
//        }
//    }


}