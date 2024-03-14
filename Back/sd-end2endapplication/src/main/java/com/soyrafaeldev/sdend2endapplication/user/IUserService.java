package com.soyrafaeldev.sdend2endapplication.user;

import com.soyrafaeldev.sdend2endapplication.registration.RegistrationRequest;
import java.util.List;
import java.util.Optional;

public interface IUserService {

    List<User> getAllUsers();

    User registerUser(RegistrationRequest registrationRequest);

    User findByEmail(String email);
}
