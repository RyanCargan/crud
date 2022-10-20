package net.codinghermit.api.controller;

import net.codinghermit.api.
                           exception.StudentIdAlreadyExistException;
import net.codinghermit.api.
                           exception.StudentIdNotFoundException;
import net.codinghermit.api.model.Student;
import net.codinghermit.api.repo.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    // get all students
    @GetMapping("/students")
    @Cacheable("students")
    public List<Student> getAllStudents()
    {
        return studentRepository.findAll();
    }

    // empty cache
    @GetMapping("/clear/students")
    @CacheEvict(value = "students", allEntries = true)
    // @Scheduled(fixedRateString = "${caching.staffListTTL}")
    public void emptyStudentsCache() {
        System.out.println("Emptying students cache!");
    }

    // create student rest API
    @Async
    @PostMapping("/students")
    @CacheEvict(value = "students", allEntries = true)
    public Student createStudent(@RequestBody Student student)  {
        if(studentRepository.findById(student.getStudentId())==null) {
            int studentid = studentRepository.insert(student);
            System.out.println(studentid);
            return studentRepository.findById(student.getStudentId());
        }else
        {
            throw new StudentIdAlreadyExistException();
        }

    }

    // get student by studentid rest api
    @GetMapping("/students/{studentid}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long studentid) {
        Student student = studentRepository.findById(studentid);
        if(student==null)
        {
            throw new StudentIdNotFoundException();
        }
        return ResponseEntity.ok(student);
    }

    // update student rest api
    @PutMapping("/students/{studentid}")
    @CacheEvict(value = "students", allEntries = true)
    public ResponseEntity<Student> updateStudent(@PathVariable Long studentid,
                @RequestBody Student studentDetails) {
    if(studentRepository.update(new Student(studentid, studentDetails.getStudentName(), studentDetails.getEmailId()))==0)
                {
                    throw new StudentIdNotFoundException();
                }

        return ResponseEntity.ok(studentRepository.findById(studentid));
    }

    // delete student rest api
    @DeleteMapping("/students/{studentid}")
    @CacheEvict(value = "students", allEntries = true)
    public ResponseEntity<Map<String, Boolean>> deleteStudent
               (@PathVariable Long studentid) {
        studentRepository.deleteById(studentid);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
