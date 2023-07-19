package com.study.boardweb;
import java.util.UUID;
public class User {
    private UUID id;
    private String name;
    private String email;
    private String password;
    private String contact; //not used yet


    public User() {
        this.id = UUID.randomUUID();
        this.name = "John Doe";
        this.email = "test@example.com";
        this.password = "test";
    }
    /* 프로필 조회 화면에 임시로 사용 */
    public User(String name) {
        this.id = UUID.randomUUID();
        this.name = "test " + name;
        this.email = "test2@example.com";
        this.password = "test2";
    }
    public User(String name, String email, String password) {
        this.id = UUID.randomUUID();
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public UUID getId() { return id; }
    public void setId() {
        this.id = UUID.randomUUID();
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

    public String getContact() {
        return contact;
    }
    public void setContact(String contact) {
        this.contact = contact;
    }


    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

}
