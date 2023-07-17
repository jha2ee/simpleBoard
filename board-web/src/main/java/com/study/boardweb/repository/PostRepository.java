package com.study.boardweb.repository;

import com.study.boardweb.Post;

import java.util.List;
import java.util.Optional;

public interface PostRepository {
    Post save(Post post);
    Optional<Post> findById(String id);

    Optional<Post> findByTitle(String title);
    List<Post> findAll();
}
