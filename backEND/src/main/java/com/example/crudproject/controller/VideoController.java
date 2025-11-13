package com.example.crudproject.controller;

import com.example.crudproject.model.VideoModel;
import com.example.crudproject.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/videos")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.POST, RequestMethod.OPTIONS})
public class VideoController {

    @Autowired
    private VideoRepository videoRepo;

    @PostMapping("/save")
    public VideoModel enviarVideo(@RequestBody VideoModel body){
        return videoRepo.save(body);
    }
}
