package com.benefit.benefit.entities;

import com.benefit.benefit.entities.FitnessProgram;
import com.benefit.benefit.entities.NutritionProgram;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private int age;
    private String gender;
    private double weight;
    private String chronicDiseases;

    // Relationships
    @OneToMany(mappedBy = "user")
    private List<FitnessProgram> fitnessPrograms;

    @OneToMany(mappedBy = "user")
    private List<NutritionProgram> nutritionPrograms;

    // Getters and Setters
}
