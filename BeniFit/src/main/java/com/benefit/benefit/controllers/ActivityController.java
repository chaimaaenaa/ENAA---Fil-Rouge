package com.benefit.benefit.controllers;

import com.benefit.benefit.dto.ActivityDTO;
import com.benefit.benefit.model.Activity;
import com.benefit.benefit.services.ActivityService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")

public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @PostMapping("/activity")
    public ResponseEntity<?> postActivity(@RequestBody ActivityDTO dto) {
        Activity createActivity = activityService.postActivity(dto);
        if (createActivity != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createActivity);
        }else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("some thing went wrong");
        }
    }
    @GetMapping("/activities")
    public ResponseEntity<?> getAllActivities() {
        try {
            return ResponseEntity.ok(activityService.getActivities());
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("some thing went wrong");


        }
    }
}
