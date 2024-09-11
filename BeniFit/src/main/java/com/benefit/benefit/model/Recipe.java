package com.benefit.benefit.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "nutrition_programs")
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String description;

    @OneToMany(mappedBy = "nutritionProgram", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Recipe> recipes;

    // Constructeurs, getters et setters
}