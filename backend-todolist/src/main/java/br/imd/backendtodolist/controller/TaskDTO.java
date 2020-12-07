package br.imd.backendtodolist.controller;

import br.imd.backendtodolist.model.Task;
import br.imd.backendtodolist.model.UserCustom;
import lombok.AllArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@AllArgsConstructor
public class TaskDTO {
    @NotBlank(message = "Please provide a title")
    private final String title;
    @NotBlank(message = "Please provide a description")
    private final String description;
    private final LocalDate beginDate;
    private final LocalDate endDate;
    @NotNull(message = "Please provide a user id")
    private final Long idUserCustom;

    public Task toDomain() {
        return Task.builder()
                .title(title)
                .description(description)
                .beginDate(beginDate)
                .endDate(endDate)
                .isConcluded(Boolean.FALSE)
                .userCustom(UserCustom.builder()
                                    .id(idUserCustom)
                                    .username(null)
                                    .name(null)
                                    .password(null)
                                    .build()
                            )
                .build();
    }
}
