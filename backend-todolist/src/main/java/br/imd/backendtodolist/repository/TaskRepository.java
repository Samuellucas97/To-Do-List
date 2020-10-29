package br.imd.backendtodolist.repository;

import br.imd.backendtodolist.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findTaskByIsConcludedIsTrue();
    List<Task> findTaskByEndDateBeforeAndIsConcludedIsFalse(LocalDate date);
    List<Task> findTaskByBeginDateAfterAndIsConcludedIsFalse(LocalDate date);
}
