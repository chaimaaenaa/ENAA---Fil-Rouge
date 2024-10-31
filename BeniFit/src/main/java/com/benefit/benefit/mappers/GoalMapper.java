package com.benefit.benefit.mappers;

import com.benefit.benefit.dto.GoalDTO;
import com.benefit.benefit.model.Goal;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface GoalMapper {
    GoalMapper INSTANCE = Mappers.getMapper(GoalMapper.class);


    GoalDTO goalToGoalDTO(Goal goal);


    Goal goalDTOToGoal(GoalDTO goalDTO);
}
