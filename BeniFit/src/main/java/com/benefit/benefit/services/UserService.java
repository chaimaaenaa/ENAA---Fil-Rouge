package com.benefit.benefit.services;

import com.benefit.benefit.dto.UserDTO;
import com.benefit.benefit.mappers.UserMapper;
import com.benefit.benefit.model.User;
import com.benefit.benefit.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User register(UserDTO userDTO) {
        User user = new User();
        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        return userRepository.save(user);
    }

    public String login(LoginRequest loginRequest) {
        // kaydir login, kaycheck l-password, o kayreturn JWT token
    }

    public User updateProfile(UserDTO userDTO) {
        // kayupdate l-user
    }
}
