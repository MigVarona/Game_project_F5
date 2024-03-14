package com.soyrafaeldev.sdend2endapplication.registration;

import com.soyrafaeldev.sdend2endapplication.user.Role;
import java.util.Collection;
import lombok.Data;

@Data
public class RegistrationRequest {

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private Collection<Role> roles;
}
