package com.benefit.benefit.controllers;

import com.benefit.benefit.dto.MealDTO;
import com.benefit.benefit.model.Meal;
import com.benefit.benefit.services.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/meals")
public class MealController {

    @Autowired
    private MealService mealService;

    @PostMapping("/log")
    public ResponseEntity<Meal> logMeal(@RequestBody MealDTO mealDTO) {
        Meal loggedMeal = mealService.logMeal(mealDTO);
        return ResponseEntity.ok(loggedMeal);
    }

    @GetMapping("/{userId}/meals")
    public ResponseEntity<List<Meal>> getUserMeals(@PathVariable int userId) {
        List<Meal> meals = mealService.getMealsByUser(userId);
        return ResponseEntity.ok(meals);
    }
}
