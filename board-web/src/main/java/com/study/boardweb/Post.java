package com.study.boardweb;

public class Post {
    private static int num = 0;
    private int id = ++num;
    private String title;
    private String contents;

    public Post() {
        this.title = "sample title" + num;
        this.contents = "sample contents" + num;
    }

    public Post(String title, String contents) {
        this.title = title;
        this.contents = contents;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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
