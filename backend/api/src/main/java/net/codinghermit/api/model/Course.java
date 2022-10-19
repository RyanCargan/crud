package net.codinghermit.api.model;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class Course implements Serializable {

    private long courseId;
    private String courseName;
    private String staffId;
}
