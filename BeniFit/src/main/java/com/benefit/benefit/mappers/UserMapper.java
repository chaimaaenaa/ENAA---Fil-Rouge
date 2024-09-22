package com.benefit.benefit.mappers;

import com.benefit.benefit.dto.UserDTO;
import com.benefit.benefit.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface UserMapper {

    User toEntity(UserDTO userDTO);

    public UserDTO toDTO(User user);
}
