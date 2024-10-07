package com.benefit.benefit.dto;

import lombok.Data;

import java.util.Date;

@Data
public class WorkoutDTO {
    private Long id;
    private int caloriesBurned;
    private int duration;
    private Date date;
    private String type;
}
