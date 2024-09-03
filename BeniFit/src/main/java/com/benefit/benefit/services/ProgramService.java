package com.benefit.benefit.services;

import com.fitlifepro.entities.FitnessProgram;
import com.fitlifepro.repositories.ProgramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProgramService {
    @Autowired
    private ProgramRepository programRepository;

    public List<FitnessProgram> findAll() {
        return programRepository.findAll();
    }

    public FitnessProgram save(FitnessProgram program) {
        return programRepository.save(program);
    }
}
