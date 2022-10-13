package net.codinghermit.api.repo;

import java.util.List;

import org.springframework.stereotype.Repository;

import net.codinghermit.api.domain.User;

@Repository
public interface UserRepo {
  List<User> findAll();
  User findBySid(Integer sid);
  User findById(String id);
  Integer create(User user);
  Integer update(User user);
  Integer disable(Integer sid);
}
