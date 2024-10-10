package com.benefit.benefit.repositories;

import com.benefit.benefit.model.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {
    @Query("SELECT SUM(a.steps) FROM Activity a")

    Integer getTotalSteps();
    @Query("SELECT SUM(a.distance) FROM Activity a")

    Double getTotalDistance();
    @Query("SELECT SUM(a.caloriesBurned) FROM Activity a")

    Integer getTotalActivityCalories();
}