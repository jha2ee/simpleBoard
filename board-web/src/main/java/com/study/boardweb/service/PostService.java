package com.study.boardweb.service;

import com.study.boardweb.Post;
import com.study.boardweb.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PostService {
    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    /* 게시글 등록 */
    public UUID create(Post post) {
        post.setId(UUID.randomUUID());
        //validateDuplicatePost(post);
        postRepository.save(post);
        return post.getId();
    }


    /* 전체 게시글 조회 */
    public List<Post> findPosts() {
        return postRepository.findAll();
    }

    public Optional<Post> findOne(String title) {
        return postRepository.findByTitle(title);
    }


}
