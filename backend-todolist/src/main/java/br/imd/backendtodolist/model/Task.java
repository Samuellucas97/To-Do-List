package br.imd.backendtodolist.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Task extends CreatedUpdatedEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description = "";
    private LocalDate beginDate = null;
    private LocalDate endDate = null;
    private Boolean isConcluded = Boolean.FALSE;
    private LocalDate updated = null;
}