package br.imd.backendtodolist.controller;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

@AllArgsConstructor
@Getter
public class UserDTO {
    @NotBlank(message = "Please provide a username")
    private final String username;
    @NotBlank(message = "Please provide a password")
    private final String password;
}
