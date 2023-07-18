package com.study.boardweb.repository;

import com.study.boardweb.Post;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class MemoryPostRepository implements PostRepository {

    private static Map<Long, Post> store = new HashMap<>();
    private static long sequence = 0L;

    @Override
    public Post save(Post post) {

        return post;
    }

    @Override
    public Optional<Post> findById(String id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public Optional<Post> findByTitle(String title) {
        return store.values().stream()
                .filter(post -> post.getTitle().equals(title))
                .findAny();
    }

    @Override
    public List<Post> findAll() {
        return new ArrayList<>(store.values());
    }
}
