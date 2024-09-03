package com.benefit.benefit.mappers;

import com.benefit.benefit.dto.ProgramDTO;
import com.benefit.benefit.entities.FitnessProgram;
import org.springframework.stereotype.Component;

@Component
public class ProgramMapper {

    public ProgramDTO toDTO(FitnessProgram program) {
        ProgramDTO programDTO = new ProgramDTO();
        programDTO.setTitle(program.getTitle());
        programDTO.setDescription(program.getDescription());
        programDTO.setLevel(program.getLevel());
        return programDTO;
    }

    public FitnessProgram toEntity(ProgramDTO programDTO) {
        FitnessProgram program = new FitnessProgram();
        program.setTitle(programDTO.getTitle());
        program.setDescription(programDTO.getDescription());
        program.setLevel(programDTO.getLevel());
        return program;
    }
}
