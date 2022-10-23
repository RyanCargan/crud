package net.codinghermit.api.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.codinghermit.api.
                           exception.StaffIdAlreadyExistException;
import net.codinghermit.api.
                           exception.StaffIdNotFoundException;
import net.codinghermit.api.model.Staff;
import net.codinghermit.api.repo.StaffRepository;

@RestController
@RequestMapping("/api/")
public class StaffController {
    // private StaffService staffService;

    @Autowired
    private StaffRepository staffRepository;

    // get all staffs
    @GetMapping("/staffs")
    @Cacheable("staffs")
    public List<Staff> getAllStaffs()
    {
        return staffRepository.findAll();
    }

    // empty cache
    @GetMapping("/clear/staffs")
    @CacheEvict(value = "staffs", allEntries = true)
    // @Scheduled(fixedRateString = "${caching.staffListTTL}")
    public void emptyStaffsCache() {
        System.out.println("Emptying staffs cache!");
    }

    // create staff rest API
    @Async("asyncExecutor")
    @PostMapping("/staffs")
    @CacheEvict(value = "staffs", allEntries = true)
    public Staff createStaff(@RequestBody Staff staff)  {
        if(staffRepository.findById(staff.getStaffId())==null) {
            int staffid = staffRepository.insert(staff);
            System.out.println(staffid);
            return staffRepository.findById(staff.getStaffId());
        }else
        {
            throw new StaffIdAlreadyExistException();
        }

    }

    // get staff by staffid rest api
    @GetMapping("/staffs/{staffid}")
    public ResponseEntity<Staff> getStaffById(@PathVariable Long staffid) {
        Staff staff = staffRepository.findById(staffid);
        if(staff==null)
        {
            throw new StaffIdNotFoundException();
        }
        return ResponseEntity.ok(staff);
    }

    // update staff rest api
    @Async("asyncExecutor")
    @PutMapping("/staffs/{staffid}")
    @CacheEvict(value = "staffs", allEntries = true)
    public ResponseEntity<Staff> updateStaff(@PathVariable Long staffid,
                @RequestBody Staff staffDetails) {
    if(staffRepository.update(new Staff(staffid, staffDetails.getStaffName(), staffDetails.getEmailId()))==0)
                {
                    throw new StaffIdNotFoundException();
                }

        return ResponseEntity.ok(staffRepository.findById(staffid));
    }

    // delete staff rest api
    @Async("asyncExecutor")
    @DeleteMapping("/staffs/{staffid}")
    @CacheEvict(value = "staffs", allEntries = true)
    public ResponseEntity<Map<String, Boolean>> deleteStaff
               (@PathVariable Long staffid) {
        staffRepository.deleteById(staffid);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
