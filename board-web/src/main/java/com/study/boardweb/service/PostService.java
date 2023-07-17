package com.study.boardweb.service;

import com.study.boardweb.Post;
import com.study.boardweb.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {
    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    /* 게시글 등록 */
    public String create(Post post) {
        //validateDuplicatePost(post);
        postRepository.save(post);
        return post.getId();
    }

    private void validateDuplicatePost(Post post) {
        postRepository.findById(post.getId())
                .ifPresent(m -> {
                    throw new IllegalStateException("중복된 게시글입니다.");
                });
    }

    /* 전체 게시글 조회 */
    public List<Post> findPosts() {
        return postRepository.findAll();
    }

    public Optional<Post> findOne(String title) {
        return postRepository.findByTitle(title);
    }
}
