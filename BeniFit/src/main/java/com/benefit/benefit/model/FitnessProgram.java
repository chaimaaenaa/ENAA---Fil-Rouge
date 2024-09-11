package com.benefit.benefit.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "fitness_programs")
public class FitnessProgram {
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

    @Column(nullable = false)
    private String niveau;

    @OneToMany(mappedBy = "fitnessProgram", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Exercise> exercises;

    // Constructeurs, getters et setters
}
