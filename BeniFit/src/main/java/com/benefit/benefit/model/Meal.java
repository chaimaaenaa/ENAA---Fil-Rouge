package com.benefit.benefit.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "meals")
public class Meal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDateTime date;

    @Column(name = "calories_consumed")
    private int caloriesConsumed;

    @ElementCollection
    @CollectionTable(name = "meal_food_items", joinColumns = @JoinColumn(name = "meal_id"))
    @Column(name = "food_item")
    private List<String> foodItems;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}