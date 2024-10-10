package com.benefit.benefit.repositories;

import com.benefit.benefit.model.Workout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkoutRepository extends JpaRepository<Workout,Long> {
    @Query("SELECT  SUN(w.duration) from Workout w")

    Integer getTotalDuration();
    @Query("SELECT SUM (w .caloriesBurned) FROM Workout w")

    Integer getTotalCaloriesBurned();

}
