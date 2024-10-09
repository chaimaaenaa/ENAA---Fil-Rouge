package com.benefit.benefit.services;

import com.benefit.benefit.dto.GoalDTO;
import com.benefit.benefit.model.Goal;
import com.benefit.benefit.repositories.GoalRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GoalService {
    private final GoalRepository goalRepository;
    public GoalDTO postGoal(GoalDTO dto) {
        Goal goal = new Goal();
        goal.setDescription(dto.getDescription());
        goal.setStartDate(dto.getStartDate());
        goal.setEndDate(dto.getEndDate());
        goal.setAchieved(false);
        return goalRepository.save(goal).getGoalDTO();
    }
}
