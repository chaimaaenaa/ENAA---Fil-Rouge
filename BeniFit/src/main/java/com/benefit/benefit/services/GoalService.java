package com.benefit.benefit.services;

import com.benefit.benefit.dto.GoalDTO;
import com.benefit.benefit.model.Goal;
import com.benefit.benefit.repositories.GoalRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class GoalService {
    private final GoalRepository goalRepository;
    public Goal postGoal(GoalDTO dto) {
        Goal goal = new Goal();
        goal.setDescription(dto.getDescription());
        goal.setStartDate(dto.getStartDate());
        goal.setEndDate(dto.getEndDate());
        goal.setAchieved(false);
        return goalRepository.save(goal);
    }
    public List<Goal> getGoals() {
        List<Goal> goals = goalRepository.findAll();
        return goals;
    }
    //public List<GoalDTO> getGoals() {
    //        List<Goal> goals = goalRepository.findAll();
    //        return goals.stream().map(Goal-> GoalMapper.goalToGoalDTO(Goal)).toList();
    //    }

    public Goal updateStatus(Long id){
        Optional<Goal> optionalGoal = goalRepository.findById(id);
        if (optionalGoal.isPresent()) {
            Goal existingGoal = optionalGoal.get();
            existingGoal.setAchieved(true);
            return goalRepository.save(existingGoal);

        }
        throw new EntityNotFoundException("Goal Not found.");
    }
}
