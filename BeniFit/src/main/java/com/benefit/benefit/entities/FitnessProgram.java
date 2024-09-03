package com.benefit.benefit.entities;

import jakarta.persistence.*;
import org.apache.catalina.User;

import java.util.Date;

@Entity
public class FitnessProgram {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String level; // e.g., Beginner, Intermediate, Advanced
    private Date createdDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // Getters and Setters
}
