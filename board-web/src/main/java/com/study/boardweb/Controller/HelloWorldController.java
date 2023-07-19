package com.study.boardweb.controller;

import com.study.boardweb.User;
import org.json.*;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*")
@RestController
public class HelloWorldController {

    @GetMapping("/*")
    public String handleException() {
        return "no result";
    }

    @GetMapping("/api/hello")
    public String test() {
        // 여기에다가 샘플 데이터 넣기
        return "Hello, world!";
    }
    @ResponseBody
    @PostMapping("/api/signUp")
    public User signUp(@RequestBody User user) throws JSONException {
        User newUser = new User(user.getName(), user.getEmail(), user.getPassword());
        /* verify user information */
        /* DB save in here */

        return newUser;
    }
    @ResponseBody
    @GetMapping("/api/getAnyUser")
    public String getAnyUser(@RequestParam String name) throws JSONException {
        User user = new User(name);
        JSONObject jsonObject = new JSONObject(user);
        // 여기에다가 샘플 데이터 넣기
        String result = user.toString();
        return jsonObject.toString();
    }

}