package com.benefit.benefit.controllers;

import com.benefit.benefit.model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;




import com.benefit.benefit.services.AdminService;





    @RestController
    @RequestMapping("/api/admins")
    public class AdminController {

        @Autowired
        private AdminService adminService;


        @GetMapping("/all")
        public ResponseEntity<List<Admin>> getAllAdmins() {
            List<Admin> admins = adminService.getAllAdmins();
            return new ResponseEntity<>(admins, HttpStatus.OK);
        }


        @GetMapping("/details/{id}")
        public ResponseEntity<Admin> getAdminById(@PathVariable Long id) {
            Admin admin = adminService.getAdminById(id);
            return admin != null ? new ResponseEntity<>(admin, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }


        @PutMapping("/update/{id}")
        public ResponseEntity<Admin> updateAdmin(@PathVariable Long id, @RequestBody Admin admin) {
            admin.setId(id);
            Admin updatedAdmin = adminService.updateAdmin(admin);
            return new ResponseEntity<>(updatedAdmin, HttpStatus.OK);
        }


        @DeleteMapping("/delete/{id}")
        public ResponseEntity<Void> deleteAdmin(@PathVariable Long id) {
            adminService.deleteAdmin(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

