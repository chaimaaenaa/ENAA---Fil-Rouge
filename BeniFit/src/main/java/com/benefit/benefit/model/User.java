package com.benefit.benefit.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String prenom;

    @Column(nullable = false)
    private int age;

    @Column(nullable = false)
    private String sexe;

    @Column(nullable = false)
    private double poids;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String telephone;

    @ElementCollection
    @CollectionTable(name = "user_maladies_chroniques", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "maladie")
    private List<String> maladiesChroniques;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<FitnessProgram> fitnessPrograms;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<NutritionProgram> nutritionPrograms;

    // Constructeurs, getters et setters
}