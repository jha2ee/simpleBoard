package com.study.boardweb;

public class Post {
    private static long num = 0L;
    private String id;
    private String title;
    private String contents;
    private String author;

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }


    private Post() {
        this.id= "";
        this.title = "sample title" + id;
        this.contents = "sample contents" + id;
        this.author = "sample author";
    }

    public Post(String title, String contents, String author) {
        this.id= "";
        this.title = title;
        this.contents = contents;
        this.author = author;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
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
