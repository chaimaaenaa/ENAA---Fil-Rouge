package com.benefit.benefit.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;


import java.util.Date;

@Getter
@Setter
public class ActivityDTO {
    private Date date;
    private int steps;
    private double distance;
    private  int caloriesBurned;
}
