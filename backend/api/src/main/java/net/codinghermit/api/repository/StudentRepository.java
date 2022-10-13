package net.codinghermit.api.repository;

import org.apache.ibatis.annotations.*;

import net.codinghermit.api.model.User;

import java.util.List;

@Mapper
public interface StudentRepository {

    @Select("select * from users")
    public List<User> findAll();

    @Select("SELECT * FROM users WHERE id = #{id}")
    public User findById(long id);

    @Delete("DELETE FROM users WHERE id = #{id}")
    public int deleteById(long id);

    @Insert("INSERT INTO users(id, firstName, lastName,emailId) " +
         " VALUES (#{id}, #{firstName}, #{lastName}, #{emailId})")
    public int insert(User user);

    @Update("Update users set firstName=#{firstName}, " +
         " lastName=#{lastName}, emailId=#{emailId} where id=#{id}")
    public int update(User user);
}
