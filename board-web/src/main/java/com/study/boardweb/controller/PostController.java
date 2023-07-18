package com.study.boardweb.controller;

import com.study.boardweb.Post;
import com.study.boardweb.service.PostService;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.*;


import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.UUID;

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
        //JSONArray jsonArray = new JSONArray();
/*
        // 더미 데이터 생성
        Post post1 = new Post();
        Post post2 = new Post();
        Post post3 = new Post();
        Post post4 = new Post();
        //Post post1 = new Post("게시글 제목 1", "게시글 내용 1", "작성자 1");
        //post1.setId(UUID.randomUUID());
        JSONObject jsonObject1 = new JSONObject(post1);
        jsonArray.put(jsonObject1);

        //Post post2 = new Post("게시글 제목 2", "게시글 내용 2", "작성자 2");
        //post2.setId(UUID.randomUUID());
        JSONObject jsonObject2 = new JSONObject(post2);
        jsonArray.put(jsonObject2);

        //Post post3 = new Post("게시글 제목 3", "게시글 내용 3", "me");
        //post3.setId(UUID.randomUUID());
        JSONObject jsonObject3 = new JSONObject(post3);
        jsonArray.put(jsonObject3);

        //Post post4 = new Post("게시글 제목 4", "게시글 내용 4", "me");
        //post4.setId(UUID.randomUUID());
        JSONObject jsonObject4 = new JSONObject(post4);
        jsonArray.put(jsonObject4);
*/
        try {
            // JSON 파일의 경로(샘플로 더미 데이터 사용)
            Resource resource = new ClassPathResource("data/data.json");
            String filePath = resource.getFile().getAbsolutePath();

            // JSON 파일 읽기
            String data = new String(Files.readAllBytes(Paths.get(filePath)));

            // 클라이언트에게 데이터 전송
            return data;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }

        //return jsonData;
    }

    /* 수정 필요*/
    @ResponseBody
    @GetMapping("/api/getPost")
    public String getPost(@RequestParam int id) throws JSONException {
        //Dummy data

        Post response = new Post("응답 게시글 제목 " + id, "응답 게시글 내용 " + id, "작성자 " + id);
        JSONObject jsonObject = new JSONObject(response);

        return jsonObject.toString();
    }

    @ResponseBody
    @PostMapping("/api/addPost")
    public Post addBoard(@RequestBody Post newPost) {
        try {
            // JSON 파일의 경로
            Resource resource = new ClassPathResource("data/data.json");
            String filePath = resource.getFile().getAbsolutePath();

            // 기존 JSON 파일의 내용 읽기
            String jsonData = new String(Files.readAllBytes(Paths.get(filePath)));

            // JSON 배열 형태로 변환
            JSONArray jsonArray = new JSONArray(jsonData);

            // 새로운 게시글을 JSON 객체로 생성
            JSONObject newPostJson = new JSONObject();
            newPost.setId(UUID.randomUUID());
            newPostJson.put("id", newPost.getId());
            newPostJson.put("title", newPost.getTitle());
            newPostJson.put("author", newPost.getAuthor());
            newPostJson.put("contents", newPost.getContents());

            // JSON 배열에 새로운 게시글 추가
            jsonArray.put(newPostJson);

            // 새로운 JSON 데이터를 파일에 쓰기
            FileWriter fileWriter = new FileWriter(filePath);
            fileWriter.write(jsonArray.toString());
            fileWriter.close();

            return newPost; // 새로운 게시글 반환
        } catch (IOException | JSONException e) {
            e.printStackTrace();
            return null;
        }

    }

    // 게시글 삭제 API
    @DeleteMapping("/api/deletePost/{postId}")
    public ResponseEntity<String> deletePost(@PathVariable UUID postId) {
        try {
            // JSON 파일 경로
            Path jsonFilePath = ResourceUtils.getFile("classpath:data/data.json").toPath();

            // JSON 파일을 문자열로 읽어오기
            String jsonData = Files.readString(jsonFilePath);

            // JSON 데이터를 JSONArray로 변환
            JSONArray jsonArray = new JSONArray(jsonData);
            // 삭제할 요소의 인덱스
            int index = -1;
            // 게시글을 찾아 삭제
            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject jsonObject = jsonArray.getJSONObject(i);
                if (jsonObject.getString("id").equals(postId.toString())) {
                    index = i;
                    break;
                }
            }
            // 요소를 찾았을 경우 삭제
            if (index != -1) {
                JSONArray newJsonArray = new JSONArray();
                for (int i = 0; i < jsonArray.length(); i++) {
                    if (i != index) {
                        newJsonArray.put(jsonArray.get(i));
                    }
                }
                jsonArray = newJsonArray;
            }
            // 변경된 JSON 데이터를 다시 파일에 쓰기
            Files.writeString(jsonFilePath, jsonArray.toString(), StandardOpenOption.TRUNCATE_EXISTING);

            return ResponseEntity.ok("게시글이 삭제되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("게시글 삭제 실패: " + e.getMessage());
        }
    }

    // 게시글 수정 API
    @PutMapping("/api/updatePost/{postId}")
    public ResponseEntity<String> updatePost(@PathVariable UUID postId, @RequestBody Post updatedPost) {
        try {
            // JSON 파일 경로
            Path jsonFilePath = ResourceUtils.getFile("classpath:data/data.json").toPath();

            // JSON 파일을 문자열로 읽어오기
            String jsonData = Files.readString(jsonFilePath);

            // JSON 데이터를 JSONArray로 변환
            JSONArray jsonArray = new JSONArray(jsonData);

            // 게시글을 찾아 업데이트
            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject jsonObject = jsonArray.getJSONObject(i);
                if (jsonObject.getString("id").equals(postId.toString())) {
                    jsonObject.put("title", updatedPost.getTitle());
                    jsonObject.put("author", updatedPost.getAuthor());
                    jsonObject.put("contents", updatedPost.getContents());
                    break;
                }
            }

            // 업데이트된 JSON 데이터를 다시 파일에 쓰기
            Files.writeString(jsonFilePath, jsonArray.toString(), StandardOpenOption.TRUNCATE_EXISTING);

            return ResponseEntity.ok("게시글이 수정되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("게시글 수정 실패: " + e.getMessage());
        }
    }

}
