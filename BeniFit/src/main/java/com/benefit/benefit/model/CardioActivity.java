package com.benefit.benefit.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "cardio_activities")
public class CardioActivity extends Activity {
    @Column(name = "distance_run")
    private double distanceRun;

    private int duration;
}