package br.imd.backendtodolist.controller;

import br.imd.backendtodolist.service.UserCustomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserCustomController {
    private final UserCustomService userCustomService;

    @PostMapping("/signin")
    public String login(@RequestParam String username,
                        @RequestParam String password) {
        return userCustomService.signin(username, password);
    }

    @PostMapping("/signup")
    public ResponseEntity<Void> signup(@RequestBody UserCustomDTO user) {
        userCustomService.signup(user.toDomain());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
