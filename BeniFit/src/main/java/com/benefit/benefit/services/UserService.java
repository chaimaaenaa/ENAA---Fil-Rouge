package com.benefit.benefit.services;

import com.benefit.benefit.entities.User;
import com.benefit.benefit.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    // Create
    public User save(User user) {
        return userRepository.save(user);
    }

    // Read - Get All Users
    public List<User> findAll() {
        return userRepository.findAll();
    }

    // Read - Get User by ID
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    // Read - Get User by Email
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    // Update
    public User update(User user) {
        return userRepository.save(user);
    }

    // Delete
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
}
