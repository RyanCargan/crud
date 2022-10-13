package net.codinghermit.api.service;

import java.util.List;
import java.util.Optional;

import net.codinghermit.api.domain.User;

public interface UserService {
  List<User> findAll();
  Optional<User> findBySid(Integer sid);
  Optional<User> findById(String id);
  Integer create(User user);
  Integer update(User user);
  Integer disable(Integer sid);
}
