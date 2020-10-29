package br.imd.backendtodolist.controller;

import br.imd.backendtodolist.service.UserCustomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserCustomController {
    private final UserCustomService userCustomService;

    @PostMapping("/signin")
    public String login(@Valid @RequestBody UserDTO userDTO) {
        return userCustomService.signin(userDTO.getUsername(), userDTO.getPassword());
    }

    @PostMapping("/signup")
    public ResponseEntity<Void> signup(@Valid @RequestBody UserCustomDTO user) {
        userCustomService.signup(user.toDomain());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
