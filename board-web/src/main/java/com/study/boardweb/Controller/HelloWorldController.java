package com.study.boardweb.Controller;

import com.study.boardweb.Post;
import org.json.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;



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
    @GetMapping("/api/getBoard")
    public String getBoard() throws JSONException {
        JSONArray jsonArray = new JSONArray();

        // 더미 데이터 생성
        Post post1 = new Post("게시글 제목 1", "게시글 내용 1");
        JSONObject jsonObject1 = new JSONObject(post1);
        jsonArray.put(jsonObject1);

        Post post2 = new Post("게시글 제목 2", "게시글 내용 2");
        JSONObject jsonObject2 = new JSONObject(post2);
        jsonArray.put(jsonObject2);

        // JSON 데이터 출력
        String jsonData = jsonArray.toString();

        // 여기에다가 샘플 데이터 넣기
        return jsonData;
    }

    @ResponseBody
    @GetMapping("/api/setPost")
    public String setBoard() throws JSONException {
        Post post = new Post("test", "test contents");
        /* db save in here */
        System.out.println(post.getTitle());
        return post.getTitle();
    }
}