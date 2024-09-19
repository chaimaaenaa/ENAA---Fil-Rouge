package com.benefit.benefit.dto;

import lombok.Data;

@Data
public class UserDTO {
    private Long id;
    private String name;
    private String email;
    private String phoneNumber;
    private String gender;
    // Don't include password for security reasons
}