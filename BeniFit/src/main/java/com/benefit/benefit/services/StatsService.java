package com.benefit.benefit.services;

import com.benefit.benefit.dto.StatsDTO;
import com.benefit.benefit.repositories.ActivityRepository;
import com.benefit.benefit.repositories.GoalRepository;
import com.benefit.benefit.repositories.WorkoutRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StatsService {
    private final GoalRepository goalRepository;
    private final ActivityRepository activityRepository;
    private final WorkoutRepository workoutRepository;

    public StatsDTO getStats(){
        Long achievedGoals = goalRepository.countAchievedGoals();
        Long notAchievedGoals = goalRepository.countNotAchievedGoals();

        Integer totalSteps =activityRepository.getTotalSteps();
        Double totalDistance =activityRepository.getTotalDistance();
        Integer totalActivityCaloriesBurned = activityRepository.getTotalActivityCalories();

        Integer totalWorkoutDuration = workoutRepository.getTotalDuration();
        Integer totalWorkoutCaloriesBurned = workoutRepository.getTotalCaloriesBurned();

        int totalCaloriesBurned =(totalActivityCaloriesBurned != null ? totalActivityCaloriesBurned : 0)+
                (totalWorkoutCaloriesBurned != null ? totalWorkoutCaloriesBurned : 0);

        StatsDTO dto = new StatsDTO();
        dto.setAchievedGoals(achievedGoals != null ? achievedGoals : 0);
        dto.setNotAchievedGoals(notAchievedGoals != null ? notAchievedGoals : 0);

        dto.setSteps(totalSteps != null ? totalSteps : 0);
        dto.setDistance(totalDistance != null ? totalDistance : 0.0);
        dto.setTotalCaloriesBurned(totalActivityCaloriesBurned);
        dto.setDuration(totalWorkoutDuration != null ? totalWorkoutDuration : 0);


        return dto;
    }
}
