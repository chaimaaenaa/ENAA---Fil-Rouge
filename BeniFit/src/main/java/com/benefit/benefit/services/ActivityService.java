package com.benefit.benefit.services;

import com.benefit.benefit.dto.ActivityDTO;
import com.benefit.benefit.dto.CardioActivityDTO;
import com.benefit.benefit.mappers.ActivityMapper;
import com.benefit.benefit.model.Activity;
import com.benefit.benefit.model.CardioActivity;
import com.benefit.benefit.repositories.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ActivityService {


    @Autowired
    private ActivityRepository activityRepository;

    public Activity logActivity(ActivityDTO activityDTO) {
        // kaylog activité
        return null;
    }

    public List<Activity> getActivitiesByUser(int userId) {
        // kayjib l-lista dial activités
        return List.of();
    }
}
