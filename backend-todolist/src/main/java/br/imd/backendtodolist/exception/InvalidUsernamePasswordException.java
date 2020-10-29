package br.imd.backendtodolist.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Getter
public class InvalidUsernamePasswordException extends RuntimeException {
    private final String message;
    private final HttpStatus httpStatus;
}