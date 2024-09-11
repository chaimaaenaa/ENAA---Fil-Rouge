package com.fitlifepro.controllers;

import com.fitlifepro.dtos.ProgramDTO;
import com.fitlifepro.entities.FitnessProgram;
import com.fitlifepro.mappers.ProgramMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/programs")
public class ProgramController {

    @Autowired
    private ProgramService programService;

    @Autowired
    private ProgramMapper programMapper;

    // Create Program
    @PostMapping
    public ProgramDTO createProgram(@RequestBody ProgramDTO programDTO) {
        FitnessProgram program = programMapper.toEntity(programDTO);
        FitnessProgram savedProgram = programService.save(program);
        return programMapper.toDTO(savedProgram);
    }

    // Get All Programs
    @GetMapping
    public List<ProgramDTO> getAllPrograms() {
        return programService.findAll().stream()
                .map(programMapper::toDTO)
                .toList();
    }

    // Get Program by ID
    @GetMapping("/{id}")
    public ProgramDTO getProgramById(@PathVariable Long id) {
        Optional<FitnessProgram> program = programService.findById(id);
        return program.map(programMapper::toDTO).orElse(null);
    }

    // Update Program
    @PutMapping("/{id}")
    public ProgramDTO updateProgram(@PathVariable Long id, @RequestBody ProgramDTO programDTO) {
        Optional<FitnessProgram> existingProgram = programService.findById(id);
        if (existingProgram.isPresent()) {
            FitnessProgram program = programMapper.toEntity(programDTO);
            program.setId(id); // Ensure the ID is set
            FitnessProgram updatedProgram = programService.update(program);
            return programMapper.toDTO(updatedProgram);
        }
        return null;
    }

    // Delete Program
    @DeleteMapping("/{id}")
    public void deleteProgram(@PathVariable Long id) {
        programService.deleteById(id);
    }
}
