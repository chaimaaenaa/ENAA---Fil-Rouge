package com.benefit.benefit.repositories;

import com.benefit.benefit.model.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {
}