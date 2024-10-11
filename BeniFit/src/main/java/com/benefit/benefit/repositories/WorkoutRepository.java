package com.benefit.benefit.repositories;

import com.benefit.benefit.model.Workout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.List;

@Repository
public interface WorkoutRepository extends JpaRepository<Workout,Long> {
    @Query("SELECT  SUN(w.duration) from Workout w")

    Integer getTotalDuration();
    @Query("SELECT SUM (w .caloriesBurned) FROM Workout w")

    Integer getTotalCaloriesBurned();

    @Query("SELECT w FROM Workout w ORDER BY w.date DESC")
    List<Workout> findLast7Workouts(Pageable pageable);




}
