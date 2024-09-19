package com.benefit.benefit.model;

import jakarta.persistence.*;
import org.apache.catalina.User;

import java.time.LocalDate;

@Entity
public class Workout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int caloriesBurned;
    private int duration; // minutes
    private LocalDate date;
    private String type;

    @ManyToOne
    private User user; // Relation avec User
    // Getters et setters
}
