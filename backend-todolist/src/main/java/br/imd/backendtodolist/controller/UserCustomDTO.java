package br.imd.backendtodolist.controller;

import br.imd.backendtodolist.model.UserCustom;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@AllArgsConstructor
public class UserCustomDTO {
    @NotBlank(message = "Please provide a username")
    private String username;
    @NotBlank(message = "Please provide a name")
    private String name;
    @NotBlank(message = "Please provide a password")
    private String password;

    public UserCustom toDomain() {
        return UserCustom.builder()
                .name(name)
                .username(username)
                .password(password)
                .build();
    }

}
