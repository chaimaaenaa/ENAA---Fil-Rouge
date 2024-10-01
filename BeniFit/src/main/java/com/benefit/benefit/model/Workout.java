package com.benefit.benefit.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Workout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int caloriesBurned;
    private int duration;
    private LocalDate date;
    private String type;

    @ManyToOne
    private User user;
}
