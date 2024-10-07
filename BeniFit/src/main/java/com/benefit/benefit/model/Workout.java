package com.benefit.benefit.model;

import com.benefit.benefit.dto.WorkoutDTO;
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

   public WorkoutDTO getWorkoutDto() {
       WorkoutDTO workoutDTO = new WorkoutDTO();

       workoutDTO.setId(id);
       workoutDTO.setCaloriesBurned(caloriesBurned);
       workoutDTO.setDuration(duration);
       workoutDTO.setDate(date);
       workoutDTO.setType(type);
       return workoutDTO;

   }
}
