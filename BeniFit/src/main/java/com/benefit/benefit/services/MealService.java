package com.benefit.benefit.services;

import com.benefit.benefit.dto.MealDTO;
import com.benefit.benefit.mappers.MealMapper;
import com.benefit.benefit.model.Meal;
import com.benefit.benefit.repositories.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MealService {

    @Autowired
    private MealRepository mealRepository;

    @Autowired
    private MealMapper mealMapper;

    public Meal logMeal(MealDTO mealDTO) {
        Meal meal = mealMapper.mealDTOToMeal(mealDTO);
        return mealRepository.save(meal);
    }

    public List<Meal> getMealsByUser(Long userId) {
        return mealRepository.findByUserId(userId);
    }
}
