package com.benefit.benefit.mappers;

import com.benefit.benefit.dto.MealDTO;
import com.benefit.benefit.model.Meal;
import com.benefit.benefit.model.User;
import com.benefit.benefit.services.UserService;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;
import org.springframework.beans.factory.annotation.Autowired;



@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface MealMapper {
    Meal mealDTOToMeal(MealDTO mealDTO);
    MealDTO mealToMealDTO(Meal meal);
}
