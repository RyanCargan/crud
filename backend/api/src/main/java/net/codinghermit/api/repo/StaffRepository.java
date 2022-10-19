package net.codinghermit.api.repo;

import org.apache.ibatis.annotations.*;

import net.codinghermit.api.model.Staff;

import java.util.List;

@Mapper
public interface StaffRepository {

    @Select("SELECT * FROM staffs")
    public List<Staff> findAll();

    @Select("SELECT * FROM staffs WHERE staffId = #{staffId}")
    public Staff findById(long staffId);

    @Delete("DELETE FROM staffs WHERE staffId = #{staffId}")
    public int deleteById(long staffId);

    @Insert("INSERT INTO staffs(staffId, staffName, emailId) " +
    		" VALUES (#{staffId}, #{staffName}, #{emailId})")
    public int insert(Staff staff);

    @Update("UPDATE staffs SET " +
		" staffName=#{staffName}, emailId=#{emailId} where staffId=#{staffId}")
    public int update(Staff staff);
}
