package com.benefit.benefit.controllers;

import com.benefit.benefit.dto.GraphDTO;
import com.benefit.benefit.services.StatsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin("*")

public class StatsController {
    private final StatsService statsService;
    @GetMapping("/stats")
    public ResponseEntity<?> getStats(){
        return ResponseEntity.ok(statsService.getStats());
    }
    @GetMapping("/graphs")

    public ResponseEntity<?> getGraphStats(){
        GraphDTO graphDTO = statsService.getGraphStats();
        if(graphDTO != null){
            return ResponseEntity.ok(graphDTO);
        }else {
            return ResponseEntity.status(404).body(null);
        }
    }

}
