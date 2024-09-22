package com.benefit.benefit.dto;

import com.benefit.benefit.model.User;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class MealDTO {
    private Long id;
    private LocalDateTime date;
    private int caloriesConsumed;
    private List<String> foodItems;
    private User user;
}




