package br.imd.backendtodolist.controller;

import br.imd.backendtodolist.model.UserCustom;
import br.imd.backendtodolist.service.UserCustomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("")
@RequiredArgsConstructor
public class UserCustomController {
    private final UserCustomService userCustomService;

    @PostMapping(path = "/sign-up", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserCustom> signup(@RequestBody @Valid UserCustomDTO userCustom) {
        return ResponseEntity.ok(userCustomService.save(userCustom.toDomain()));
    }

    @GetMapping(path = "/users/{username}")
    public ResponseEntity<Long> findIdByUsername(@PathVariable("username") String username) {
        return ResponseEntity.ok(userCustomService.findIdByUsername(username));
    }
}
