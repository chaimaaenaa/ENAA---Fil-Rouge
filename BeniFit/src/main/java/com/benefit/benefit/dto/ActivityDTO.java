package com.benefit.benefit.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


import java.util.Date;

@Getter
@Setter
public class ActivityDTO {
   // @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date date;
    private int steps;
    private double distance;
    private  int caloriesBurned;
}
