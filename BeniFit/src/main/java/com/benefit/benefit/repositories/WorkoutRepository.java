package com.benefit.benefit.repositories;

import com.benefit.benefit.model.Workout;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public interface WorkoutRepository extends JpaRepository<Workout,Long> {
    @Query("SELECT  SUM(w.duration) from Workout w")
    Integer getTotalDuration();

    @Query(value = "SELECT SUM(workout.calories_burned) FROM workout;",nativeQuery = true)
    Integer getTotalCaloriesBurned();

    @Query("SELECT w FROM Workout w ORDER BY w.date DESC")
    List<Workout> findLast7Workouts(Pageable pageable);




}
