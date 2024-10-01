package com.benefit.benefit.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
@Entity
public class CardioActivity extends Activity {
    @Column(name = "distance_run")
    private double distanceRun;

    private int duration;
}