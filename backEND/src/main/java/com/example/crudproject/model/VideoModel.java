package com.example.crudproject.model;

import jakarta.persistence.*;

@Entity
@Table(name = "TB_VIDEO")
public class VideoModel {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;
    private String urlDoVideo;


    public Long getId() {return id;}
    @Column(name = "url", nullable = false)
    public String getUrlDoVideo() {return urlDoVideo;}

    public void setUrlDoVideo(String urlDoVideo) {this.urlDoVideo = urlDoVideo;}
}
