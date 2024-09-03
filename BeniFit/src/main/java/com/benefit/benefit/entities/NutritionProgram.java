package com.benefit.benefit.entities;

import jakarta.persistence.*;
import org.apache.catalina.User;

import javax.persistence.*;
import java.util.Date;

@Entity
public class NutritionProgram {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private Date createdDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // Getters and Setters
}
