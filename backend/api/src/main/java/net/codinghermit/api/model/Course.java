package net.codinghermit.api.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class Course {

    private long id;
    private String firstName;
    private String lastName;
    private String emailId;

    // public Course() {}

    // public Course(long id,String firstName, 
    //           String lastName, String emailId) {
    //     super();
    //     this.id=id;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.emailId = emailId;
    // }
}
