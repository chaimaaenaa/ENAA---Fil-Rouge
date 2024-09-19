package com.benefit.benefit.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class MealDTO {
    private Long id;
    private LocalDateTime date;
    private int caloriesConsumed;
    private List<String> foodItems;
    private Long userId;
}