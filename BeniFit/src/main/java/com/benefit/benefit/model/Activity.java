package com.benefit.benefit.model;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.*;
import jakarta.persistence.Id;
import lombok.Data;


import java.time.LocalDateTime;
import java.util.Date;

@Data
@Entity
public abstract class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date date;
    private int steps;
    private double distance;
    private  int caloriesBurned;




}