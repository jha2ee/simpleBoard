package com.study.boardweb.controller;

import com.study.boardweb.Post;
import com.study.boardweb.service.PostService;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@Controller
public class PostController {
    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }


    @ResponseBody
    @GetMapping("/api/getBoard")
    public String getBoard(Model model) throws JSONException {
        JSONArray jsonArray = new JSONArray();

        // 더미 데이터 생성
        Post post1 = new Post("게시글 제목 1", "게시글 내용 1", "작성자 1");
        JSONObject jsonObject1 = new JSONObject(post1);
        jsonArray.put(jsonObject1);

        Post post2 = new Post("게시글 제목 2", "게시글 내용 2", "작성자 2");
        JSONObject jsonObject2 = new JSONObject(post2);
        jsonArray.put(jsonObject2);

        Post post3 = new Post("게시글 제목 3", "게시글 내용 3", "me");
        JSONObject jsonObject3 = new JSONObject(post3);
        jsonArray.put(jsonObject3);

        Post post4 = new Post("게시글 제목 4", "게시글 내용 4", "me");
        JSONObject jsonObject4 = new JSONObject(post4);
        jsonArray.put(jsonObject4);

        // JSON 데이터 출력
        String jsonData = jsonArray.toString();

        // 여기에다가 샘플 데이터 넣기
        return jsonData;
    }

    @ResponseBody
    @GetMapping("/api/getPost")
    public String getPost(@RequestParam int id) throws JSONException {
        //Dummy data
        Post response = new Post("응답 게시글 제목 " + id, "응답 게시글 내용 " + id, "작성자 " + id);
        JSONObject jsonObject = new JSONObject(response);

        return jsonObject.toString();
    }

    @ResponseBody
    @PostMapping("/api/setPost")
    public String setBoard(@RequestParam long timestamp) throws JSONException {
        Post post = new Post("새 게시글", "test content\n" + timestamp, "작성자 ");
        postService.join(post);
        /* db save in here */
        return "redirect:/";
    }
}
