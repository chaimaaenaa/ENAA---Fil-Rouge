package com.benefit.benefit.dto;

import com.benefit.benefit.model.User;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

import java.time.LocalDateTime;
@Data
public class ActivityDTO {
    private LocalDateTime date;
    private int caloriesBurned;
    private User user;
}
