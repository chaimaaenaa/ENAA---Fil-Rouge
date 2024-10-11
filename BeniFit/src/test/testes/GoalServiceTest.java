package com.benefit.testes;

import com.benefit.model.Goal;
import com.benefit.repositories.GoalRepository;
import com.benefit.services.GoalService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

class GoalServiceTest {

    @Mock
    private GoalRepository goalRepository;

    @InjectMocks
    private GoalService goalService;

    @Test
    void testCreateGoal() {
        Goal goal = new Goal();
        goal.setId(1L);
        goal.setDescription("Lose 5kg in 2 months");

        when(goalRepository.save(any(Goal.class))).thenReturn(goal);

        Goal createdGoal = goalService.createGoal(goal);

        assertNotNull(createdGoal);
        assertEquals("Lose 5kg in 2 months", createdGoal.getDescription());
    }

    @Test
    void testFindGoalById_ExistingGoal() {
        Goal goal = new Goal();
        goal.setId(1L);
        goal.setDescription("Gain 3kg muscle");

        when(goalRepository.findById(1L)).thenReturn(Optional.of(goal));

        Goal foundGoal = goalService.findGoalById(1L);

        assertNotNull(foundGoal);
        assertEquals("Gain 3kg muscle", foundGoal.getDescription());
    }

    @Test
    void testFindGoalById_GoalNotFound() {
        when(goalRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> goalService.findGoalById(1L));
    }
}
