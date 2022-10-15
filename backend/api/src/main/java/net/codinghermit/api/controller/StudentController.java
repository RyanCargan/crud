package net.codinghermit.api.controller;

import net.codinghermit.api.
                           exception.UserIdAlreadyExistException;
import net.codinghermit.api.
                           exception.UserIdNotFoundException;
import net.codinghermit.api.model.User;
import net.codinghermit.api.repo.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/")
public class StudentController {
    @Autowired
    private UserRepository userRepository;

    // get all users
    @GetMapping("/students")
    public List<User> getAllUsers()
    {
        return userRepository.findAll();
    }

    // create user rest API
    @PostMapping("/students")
    public User createUser(@RequestBody User user)  {
        if(userRepository.findById(user.getId())==null) {
            int id = userRepository.insert(user);
            System.out.println(id);
            return userRepository.findById(user.getId());
        }else
        {
            throw new UserIdAlreadyExistException();
        }

    }

    // get user by id rest api
    @GetMapping("/students/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userRepository.findById(id);
        if(user==null)
        {
            throw new UserIdNotFoundException();
        }
        return ResponseEntity.ok(user);
    }

    // update user rest api
    @PutMapping("/students/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id,
                @RequestBody User userDetails) {
    if(userRepository.update(new User(id, userDetails.getFirstName(), 
            userDetails.getLastName(), userDetails.getEmailId()))==0)
                {
                    throw new UserIdNotFoundException();
                }

        return ResponseEntity.ok(userRepository.findById(id));
    }

    // delete user rest api
    @DeleteMapping("/students/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser
               (@PathVariable Long id) {
        userRepository.deleteById(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
