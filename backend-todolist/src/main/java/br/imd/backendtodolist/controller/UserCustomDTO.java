package br.imd.backendtodolist.controller;

import br.imd.backendtodolist.model.Role;
import br.imd.backendtodolist.model.UserCustom;
import lombok.AllArgsConstructor;

import javax.validation.constraints.NotBlank;

@AllArgsConstructor
public class UserCustomDTO {
    @NotBlank(message = "Please provide a username")
    private final String username;
    @NotBlank(message = "Please provide a name")
    private final String name;
    @NotBlank(message = "Please provide a password")
    private final String password;


    public UserCustom toDomain() {
        return UserCustom.builder()
                .username(username)
                .name(name)
                .password(password)
                .role(Role.ROLE_CLIENT)
                .build();
    }
}
