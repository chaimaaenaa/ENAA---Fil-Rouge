package com.benefit.benefit.model;


import com.benefit.benefit.dto.ActivityDTO;
import com.benefit.benefit.dto.GoalDTO;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Data
    public class Goal {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String description;
        private Date startDate;
        private Date endDate;
        private boolean achieved;


    public GoalDTO getGoalDTO() {
        GoalDTO goalDTO = new GoalDTO();
        goalDTO.setId(id);
        goalDTO.setDescription(description);
        goalDTO.setStartDate(startDate);
        goalDTO.setEndDate(endDate);
        goalDTO.setAchieved(achieved);
        return goalDTO;


    }
}

