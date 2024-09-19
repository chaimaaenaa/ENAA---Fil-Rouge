package com.benefit.benefit.mappers;

import com.benefit.benefit.dto.MealDTO;
import com.benefit.benefit.model.Meal;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {UserMapper.class})
public interface MealMapper {
    @Mapping(target = "userId", source = "user.id")
    MealDTO mealToMealDTO(Meal meal);

    @Mapping(target = "user.id", source = "userId")
    Meal mealDTOToMeal(MealDTO mealDTO);
}