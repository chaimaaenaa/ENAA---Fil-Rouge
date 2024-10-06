package com.benefit.benefit.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Data
public class Workout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int caloriesBurned;
    private int duration;
    private Date date;
    private String type;

    @ManyToOne
    private User user;
}
