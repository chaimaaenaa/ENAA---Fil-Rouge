package com.benefit.benefit.services;

import com.benefit.benefit.dto.WorkoutDTO;
import com.benefit.benefit.model.Workout;
import com.benefit.benefit.repositories.WorkoutRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class WorkoutService  {
    private final WorkoutRepository workoutRepository;
    public WorkoutDTO postWorkout(WorkoutDTO workoutDTO) {
        Workout workout = new Workout();
        workout.setDate(workoutDTO.getDate());
        workout.setCaloriesBurned(workoutDTO.getCaloriesBurned());
        workout.setDuration(workoutDTO.getDuration());
        workout.setType(workoutDTO.getType());
        workout.setId(workoutDTO.getId());

        return workoutRepository.save(workout).getWorkoutDto();
    }
    public List<WorkoutDTO> getAllWorkouts() {
        List<Workout> workouts = workoutRepository.findAll();
        return workouts.stream().map(Workout::getWorkoutDto).collect(Collectors.toList());
    }
}
