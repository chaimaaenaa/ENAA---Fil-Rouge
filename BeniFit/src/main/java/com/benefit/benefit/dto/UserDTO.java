package com.benefit.benefit.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class UserDTO {
    private String username;
    private String email;
    private String phoneNumber;
    private String gender;
    private String password;

}


