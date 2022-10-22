package net.codinghermit.api.repo;

import org.apache.ibatis.annotations.*;
// import org.springframework.scheduling.annotation.Async;

import net.codinghermit.api.model.Student;

import java.util.List;
// import java.util.concurrent.CompletableFuture;

@Mapper
public interface StudentRepository {

//     @Async("asyncExecutor")
    @Select("SELECT * FROM students")
    public List<Student> findAll();
//     public List<CompletableFuture<Student>> findAll();

    @Select("SELECT * FROM students WHERE studentId = #{studentId}")
    public Student findById(long studentId);

    @Delete("DELETE FROM students WHERE studentId = #{studentId}")
    public int deleteById(long studentId);

    @Insert("INSERT INTO students(studentId, studentName, emailId) " +
          " VALUES (#{studentId}, #{studentName}, #{emailId})")
    public int insert(Student user);

    @Update("UPDATE students SET " +
          " studentName=#{studentName}, emailId=#{emailId} WHERE studentId=#{studentId}")
    public int update(Student user);
}
