package com.benefit.benefit.mappers;

import com.benefit.benefit.dto.UserDTO;
import com.benefit.benefit.entities.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public UserDTO toDTO(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setEmail(user.getEmail());
        userDTO.setAge(user.getAge());
        userDTO.setGender(user.getGender());
        userDTO.setWeight(user.getWeight());
        userDTO.setChronicDiseases(user.getChronicDiseases());
        return userDTO;
    }

    public User toEntity(UserDTO userDTO) {
        User user = new User();
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setAge(userDTO.getAge());
        user.setGender(userDTO.getGender());
        user.setWeight(userDTO.getWeight());
        user.setChronicDiseases(userDTO.getChronicDiseases());
        return user;
    }
}
