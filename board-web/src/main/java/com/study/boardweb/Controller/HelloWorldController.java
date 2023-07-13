package com.study.boardweb.Controller;

import org.json.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = "*")
@RestController
public class HelloWorldController {

    @GetMapping("/api/hello")
    public String test() {
        // 여기에다가 샘플 데이터 넣기
        return "Hello, world!";
    }

    @ResponseBody
    @GetMapping("/api/getBoard")
    public String getBoard() throws JSONException {
        JSONObject post = new JSONObject();
        post.put("id", "i1");
        post.put("title", "t1");

        // 여기에다가 샘플 데이터 넣기
        return post.toString();
    }
}