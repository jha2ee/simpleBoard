package com.study.boardweb;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;

import java.util.UUID;

public class Post {
    private static long num = 0L;
    //@Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id ;
    private String title;
    private String contents;
    private String author;

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }


    public Post() {
        this.id = UUID.randomUUID();
        this.title = "sample title" + id;
        this.contents = "sample contents" + id;
        this.author = "sample author";
    }

    public Post(String title, String contents, String author) {
        this.id = UUID.randomUUID();
        this.title = title;
        this.contents = contents;
        this.author = author;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }
}
