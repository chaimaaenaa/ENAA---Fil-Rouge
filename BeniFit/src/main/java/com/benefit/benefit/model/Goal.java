package com.benefit.benefit.model;


import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
    public class Goal {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String description;
        private LocalDate startDate;
        private LocalDate endDate;
        private boolean achieved;

        @ManyToOne
        private User user; // Relation avec User
        // Getters et setters
    }

