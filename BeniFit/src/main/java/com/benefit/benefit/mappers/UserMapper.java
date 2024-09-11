package benefit.mappers;

import benefit.dto.UserDto;
import benefit.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toDto(User user);

    User toEntity(UserDto userDto);

    void updateEntity(UserDto userDto, @MappingTarget User user);
}
