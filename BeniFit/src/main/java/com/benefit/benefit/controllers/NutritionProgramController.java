package com.benefit.benefit.controllers;

import com.fitlifepro.dtos.ProgramDTO;
import com.fitlifepro.entities.NutritionProgram;
import com.fitlifepro.mappers.ProgramMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/nutrition-programs")
public class NutritionProgramController {

    @Autowired
    private NutritionProgramService programService;

    @Autowired
    private ProgramMapper programMapper;

    // Create Nutrition Program
    @PostMapping
    public ProgramDTO createProgram(@RequestBody ProgramDTO programDTO) {
        NutritionProgram program = programMapper.toEntity(programDTO);
        NutritionProgram savedProgram = programService.save(program);
        return programMapper.toDTO(savedProgram);
    }

    // Get All Nutrition Programs
    @GetMapping
    public List<ProgramDTO> getAllPrograms() {
        return programService.findAll().stream()
                .map(programMapper::toDTO)
                .toList();
    }

    // Get Nutrition Program by ID
    @GetMapping("/{id}")
    public ProgramDTO getProgramById(@PathVariable Long id) {
        Optional<NutritionProgram> program = programService.findById(id);
        return program.map(programMapper::toDTO).orElse(null);
    }

    // Update Nutrition Program
    @PutMapping("/{id}")
    public ProgramDTO updateProgram(@PathVariable Long id, @RequestBody ProgramDTO programDTO) {
        Optional<NutritionProgram> existingProgram = programService.findById(id);
        if (existingProgram.isPresent()) {
            NutritionProgram program = programMapper.toEntity(programDTO);
            program.setId(id); // Ensure the ID is set
            NutritionProgram updatedProgram = programService.update(program);
            return programMapper.toDTO(updatedProgram);
        }
        return null;
    }

    // Delete Nutrition Program
    @DeleteMapping("/{id}")
    public void deleteProgram(@PathVariable Long id) {
        programService.deleteById(id);
    }
}
