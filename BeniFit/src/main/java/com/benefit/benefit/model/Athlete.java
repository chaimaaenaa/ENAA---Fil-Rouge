package com.benefit.benefit.model;

import com.benefit.benefit.enums.Role;
import jakarta.persistence.Entity;
import lombok.*;

@Getter
@Setter
@Entity
public class Athlete extends User {

    public Athlete() {
        this.setRole(Role.ATHLETE);
    }
}
