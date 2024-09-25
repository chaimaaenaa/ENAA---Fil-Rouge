package com.benefit.benefit.dto;

import com.benefit.benefit.model.User;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;

@Data
public class ActivityDTO {
    private Long id;
    private Date date;
    private int steps;
    private double distance;
    private  int caloriesBurned;
}
