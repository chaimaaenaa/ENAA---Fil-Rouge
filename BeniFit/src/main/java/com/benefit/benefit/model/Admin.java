package com.benefit.benefit.model;

import com.benefit.benefit.enums.Role;
import jakarta.persistence.Entity;
import lombok.*;

@Getter
@Setter
@Entity
public class Admin extends User {

    public Admin() {
        this.setRole(Role.ADMIN);
    }

}
