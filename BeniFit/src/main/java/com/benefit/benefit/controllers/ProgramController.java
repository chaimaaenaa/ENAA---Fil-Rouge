package com.benefit.benefit.controllers;

import com.fitlifepro.dtos.ProgramDTO;
import com.fitlifepro.entities.FitnessProgram;
import com.fitlifepro.services.ProgramService;
import com.fitlifepro.mappers.ProgramMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/programs")
public class ProgramController {

    @Autowired
    private ProgramService programService;

    @Autowired
    private ProgramMapper programMapper;

    @GetMapping
    public List<ProgramDTO> getAllPrograms() {
        return programService.findAll().stream()
                .map(programMapper::toDTO)
                .collect(Collectors.toList());
    }

    @PostMapping
    public ProgramDTO createProgram(@RequestBody ProgramDTO programDTO) {
        FitnessProgram program = programMapper.toEntity(programDTO);
        FitnessProgram savedProgram = programService.save(program);
        return programMapper.toDTO(savedProgram);
    }
}
