package com.benefit.benefit.services;

import com.benefit.benefit.dto.GraphDTO;
import com.benefit.benefit.dto.StatsDTO;
import com.benefit.benefit.dto.WorkoutDTO;
import com.benefit.benefit.model.Activity;
import com.benefit.benefit.model.Workout;
import com.benefit.benefit.repositories.ActivityRepository;
import com.benefit.benefit.repositories.GoalRepository;
import com.benefit.benefit.repositories.WorkoutRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.config.PageableHandlerMethodArgumentResolverCustomizer;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StatsService {
    private final GoalRepository goalRepository;
    private final ActivityRepository activityRepository;
    private final WorkoutRepository workoutRepository;
    private final PageableHandlerMethodArgumentResolverCustomizer pageableCustomizer;

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

    public GraphDTO getGraphStats() {
        Pageable pageable = PageRequest.of(0, 7);
        List<Workout> workouts = workoutRepository.findLast7Workouts( pageable);
        List<Activity> activities = activityRepository.findLast7Activities(pageable);

        GraphDTO graphDTO = new GraphDTO();
        graphDTO.setWorkouts(workouts.stream().map(WorkoutDTO::getWorkoutDto).collect(Collectors.toList()));
        graphDTO.setActivities(activities.stream().map(ActivityDTO::getActivityDto).collect(Collectors.toList()));
        return graphDTO;
    }
}
