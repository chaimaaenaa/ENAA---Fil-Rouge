package com.fitlifepro.services;

import com.fitlifepro.entities.NutritionProgram;
import com.fitlifepro.repositories.ProgramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NutritionProgramService {
    @Autowired
    private ProgramRepository programRepository;

    // Create
    public NutritionProgram save(NutritionProgram program) {
        return programRepository.save(program);
    }

    // Read - Get All Nutrition Programs
    public List<NutritionProgram> findAll() {
        return programRepository.findAll();
    }

    // Read - Get Nutrition Program by ID
    public Optional<NutritionProgram> findById(Long id) {
        return programRepository.findById(id);
    }

    // Update
    public NutritionProgram update(NutritionProgram program) {
        return programRepository.save(program);
    }

    // Delete
    public void deleteById(Long id) {
        programRepository.deleteById(id);
    }
}
