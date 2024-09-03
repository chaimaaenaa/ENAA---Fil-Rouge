package com.benefit.benefit.repositories;

import com.fitlifepro.entities.FitnessProgram;
import com.fitlifepro.entities.NutritionProgram;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProgramRepository extends JpaRepository<FitnessProgram, Long> {
}
