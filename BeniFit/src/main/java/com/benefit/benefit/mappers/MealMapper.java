package com.benefit.benefit.mappers;

import com.benefit.benefit.dto.MealDTO;
import com.benefit.benefit.dto.UserDTO;
import com.benefit.benefit.model.Meal;
import com.benefit.benefit.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;


@Mapper(componentModel = "spring")
public interface MealMapper {

    MealMapper INSTANCE = Mappers.getMapper(MealMapper.class);

    @Mapping(target = "userId", source = "user.id")
    MealDTO mealToMealDTO(Meal meal);

    @Mapping(target = "user.id", source = "userId")
    Meal mealDTOToMeal(MealDTO mealDTO);

    // Additional method to map User to UserDTO if needed
    UserDTO userToUserDTO(User user);

    // Additional method to map UserDTO to User if needed
    User userDTOToUser(UserDTO userDTO);
}
