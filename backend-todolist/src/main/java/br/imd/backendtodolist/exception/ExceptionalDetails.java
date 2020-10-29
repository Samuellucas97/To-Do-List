package br.imd.backendtodolist.exception;

import lombok.Data;
import lombok.experimental.SuperBuilder;

import java.time.LocalDateTime;

@Data
@SuperBuilder
public class ExceptionalDetails {
    protected final String title;
    protected final Integer status;
    protected final String detail;
    protected final LocalDateTime timestamp;
    protected final String developerMessage;
}