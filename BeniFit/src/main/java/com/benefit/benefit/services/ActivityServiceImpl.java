package com.benefit.benefit.services;

import com.benefit.benefit.dto.ActivityDTO;
import com.benefit.benefit.model.Activity;
import com.benefit.benefit.repositories.ActivityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class ActivityServiceImpl implements ActivityService{
    private final ActivityRepository activityRepository;

    public ActivityDTO postActivity(ActivityDTO dto) {
        Activity activity = new Activity() ;

        activity.setDate(dto.getDate());
        activity.setSteps(dto.getSteps());
        activity.setDistance(dto.getDistance());
        activity.setCaloriesBurned(dto.getCaloriesBurned());
        return activityRepository.save(activity).getActivityDTO();
    }
}
