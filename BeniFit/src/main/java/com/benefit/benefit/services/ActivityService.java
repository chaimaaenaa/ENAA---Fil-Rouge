package com.benefit.benefit.services;

import com.benefit.benefit.dto.ActivityDTO;
import com.benefit.benefit.mappers.ActivityMapper;
import com.benefit.benefit.model.Activity;
import com.benefit.benefit.repositories.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ActivityService{

    @Autowired
    ActivityMapper activityMapper;

    @Autowired
    private ActivityRepository activityRepository;

    public Activity postActivity(ActivityDTO dto) {
        Activity activity = activityMapper.activityDTOToActivity(dto);
        return activityRepository.save(activity);
    }
    public List<ActivityDTO> getActivities() {
        List<Activity> activities = activityRepository.findAll();
        return activities.stream().map(Activity::getActivityDTO).collect(Collectors.toList());
    }
}


