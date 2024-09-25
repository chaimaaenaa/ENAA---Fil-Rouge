package com.benefit.benefit.model;

public class User {
    private Long id;
    private String name;
    private String email;
    private String phoneNumber;
    private String gender;
    private String password;  // Add this field

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPassword() {  // Add this getter
        return password;
    }

    public void setPassword(String password) {  // Add this setter
        this.password = password;
    }
}
