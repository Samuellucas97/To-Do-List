package br.imd.backendtodolist.service;

import br.imd.backendtodolist.exception.ResourceNotFoundException;
import br.imd.backendtodolist.model.Task;
import br.imd.backendtodolist.model.UserCustom;
import br.imd.backendtodolist.repository.TaskRepository;
import br.imd.backendtodolist.repository.UserCustomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;
    private final UserCustomRepository userCustomRepository;

    public List<Task> listAll(Long idUserCustom) {
        final Optional<UserCustom> userCustomById = userCustomRepository.findById(idUserCustom);
        return taskRepository.findAllByUserCustom(userCustomById.get());
    }

    @Transactional
    public Task save(Task task) {
        updatedUserCustomFromTask(task);
        return taskRepository.save(task);
    }

    public void delete(Long id) {
       taskRepository.delete(
           taskRepository.findById(id).orElseThrow(
               () -> new ResourceNotFoundException("Tarefa não encontrada")
           )
       );
    }

    public void update(Task task) {
        updatedUserCustomFromTask(task);
        taskRepository.save(task);
    }

    public List<Task> tasksConcluded(Long idUserCustom) {
        final Optional<UserCustom> userCustomById = userCustomRepository.findById(idUserCustom);
        return taskRepository.findTaskByUserCustomAndIsConcludedIsTrue(userCustomById.get());
    }

    public List<Task> tasksScheduler(Long idUserCustom) {
        final Optional<UserCustom> userCustomById = userCustomRepository.findById(idUserCustom);
        return taskRepository.findTaskByUserCustomAndBeginDateAfterAndIsConcludedIsFalse(userCustomById.get(), LocalDate.now());
    }

    public List<Task> tasksPending(Long idUserCustom) {
        final Optional<UserCustom> userCustomById = userCustomRepository.findById(idUserCustom);
        return taskRepository.findTaskByUserCustomAndEndDateBeforeAndIsConcludedIsFalse(userCustomById.get(), LocalDate.now());
    }


    private Task updatedUserCustomFromTask(Task task) {
        Long idUserCustom = task.getUserCustom().getId();
        final Optional<UserCustom> userCustomById = userCustomRepository.findById(idUserCustom);
        task.setUserCustom(userCustomById.get());
        return task;
    }


}
