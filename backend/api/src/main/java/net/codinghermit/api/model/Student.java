package net.codinghermit.api.model;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class Student implements Serializable {

    private long studentId;
    private String studentName;
    private String emailId;
}
