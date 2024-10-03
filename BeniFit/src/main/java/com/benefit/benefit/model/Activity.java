package com.benefit.benefit.model;

import com.benefit.benefit.dto.ActivityDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date date;
    private int steps;
    private double distance;
    private  int caloriesBurned;


    public  ActivityDTO getActivityDTO() {
        ActivityDTO activityDTO = new ActivityDTO();

        return activityDTO;
    }

}