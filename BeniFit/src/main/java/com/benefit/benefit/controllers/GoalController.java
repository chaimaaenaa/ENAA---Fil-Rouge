package com.benefit.benefit.controllers;

import com.benefit.benefit.dto.GoalDTO;
import com.benefit.benefit.services.GoalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")

public class GoalController {
    private final GoalService goalService;

    @PostMapping("/goal")
    public ResponseEntity<?>postGoal(@RequestBody GoalDTO dto) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(goalService.postGoal(dto));

        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());

        }
    }
}
