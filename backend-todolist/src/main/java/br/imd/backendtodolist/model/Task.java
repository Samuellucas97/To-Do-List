package br.imd.backendtodolist.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description = "";
    private LocalDate beginDate = null;
    private LocalDate endDate = null;
    private Boolean isConcluded = Boolean.FALSE;

    @OneToOne
    private UserCustom userCustom;
}