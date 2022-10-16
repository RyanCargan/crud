package net.codinghermit.api.model;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Getter;
// import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@AllArgsConstructor
// @NoArgsConstructor
public class User implements Serializable {

    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
}
