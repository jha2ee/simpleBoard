package com.study.boardweb.controller;

import com.study.boardweb.Post;
import org.json.*;
import org.springframework.ui.Model;
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
    @GetMapping("/api/getProfile")
    public String getBoard(@RequestParam int id) throws JSONException {
        String result = "User" + id;
        // 여기에다가 샘플 데이터 넣기
        return result;
    }

}