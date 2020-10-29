package br.imd.backendtodolist.model;

import javax.persistence.MappedSuperclass;
import java.time.LocalDate;

@MappedSuperclass
public class CreatedUpdatedEntity {
    private LocalDate createdAt = null;

    public CreatedUpdatedEntity create() {
        this.createdAt = LocalDate.now();
        return this;
    }
}
