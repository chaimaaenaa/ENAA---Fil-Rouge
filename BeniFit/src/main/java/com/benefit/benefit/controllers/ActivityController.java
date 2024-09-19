package com.benefit.benefit.controllers;

import com.benefit.benefit.dto.ActivityDTO;
import com.benefit.benefit.model.Activity;
import com.benefit.benefit.services.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/activities")
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @PostMapping("/log")
    public ResponseEntity<Activity> logActivity(@RequestBody ActivityDTO activityDTO) {
        Activity loggedActivity = activityService.logActivity(activityDTO);
        return ResponseEntity.ok(loggedActivity);
    }

    @GetMapping("/{userId}/activities")
    public ResponseEntity<List<Activity>> getUserActivities(@PathVariable int userId) {
        List<Activity> activities = activityService.getActivitiesByUser(userId);
        return ResponseEntity.ok(activities);
    }
}
