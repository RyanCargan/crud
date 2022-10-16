package net.codinghermit.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.codinghermit.api.model.User;
import net.codinghermit.api.repo.UserRepository;


@Service
public class UserService {

	@Autowired
    private UserRepository userRepository;

    // get all users
    public List<User> getAllUsers()
    {
        return userRepository.findAll();
    }
}
