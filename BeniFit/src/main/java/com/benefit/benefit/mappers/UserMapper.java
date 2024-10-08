package com.benefit.benefit.mappers;

import com.benefit.benefit.dto.AdminDTO;
import com.benefit.benefit.dto.AthleteDTO;
import com.benefit.benefit.dto.LoginResponse;
import com.benefit.benefit.dto.UserDTO;
import com.benefit.benefit.model.Admin;
import com.benefit.benefit.model.Athlete;
import com.benefit.benefit.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {

    // Admin Mappings

    AdminDTO toAdminDTO(Admin admin);

    Admin toAdminEntity(AdminDTO dto);

    AthleteDTO toAthleteDTO(Athlete artisan);

    Athlete toAthleteEntity(AthleteDTO dto);
}
