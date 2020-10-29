package br.imd.backendtodolist.exception;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@Getter
@EqualsAndHashCode
public class ValidationExceptionDetails extends ExceptionalDetails {
    private final String fields;
    private final String fieldsMessage;
}