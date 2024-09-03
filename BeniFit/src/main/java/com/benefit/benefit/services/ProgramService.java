package com.fitlifepro.services;

import com.fitlifepro.entities.FitnessProgram;
import com.fitlifepro.repositories.ProgramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProgramService {
    @Autowired
    private ProgramRepository programRepository;

    // Create
    public FitnessProgram save(FitnessProgram program) {
        return programRepository.save(program);
    }

    // Read - Get All Programs
    public List<FitnessProgram> findAll() {
        return programRepository.findAll();
    }

    // Read - Get Program by ID
    public Optional<FitnessProgram> findById(Long id) {
        return programRepository.findById(id);
    }

    // Update
    public FitnessProgram update(FitnessProgram program) {
        return programRepository.save(program);
    }

    // Delete
    public void deleteById(Long id) {
        programRepository.deleteById(id);
    }
}
