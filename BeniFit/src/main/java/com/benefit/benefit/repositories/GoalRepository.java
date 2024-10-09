package com.benefit.benefit.repositories;

import com.benefit.benefit.model.Goal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface GoalRepository extends JpaRepository<Goal, Long> {


}
