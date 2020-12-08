package br.imd.backendtodolist.repository;

import br.imd.backendtodolist.model.Task;
import br.imd.backendtodolist.model.UserCustom;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findAllByUserCustom(UserCustom userCustom);
    Task findByUserCustomAndId(UserCustom userCustom, Long idTask);
    List<Task> findTaskByUserCustomAndIsConcludedIsTrue(UserCustom userCustom);
    List<Task> findTaskByUserCustomAndEndDateBeforeAndIsConcludedIsFalse(UserCustom userCustom, LocalDate date);
    List<Task> findTaskByUserCustomAndBeginDateAfterAndIsConcludedIsFalse(UserCustom userCustom, LocalDate date);
}
