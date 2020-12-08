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
    private final UserCustomService userCustomService;

    public List<Task> listAll(Long idUserCustom) {
        UserCustom userCustomById = userCustomService.findById(idUserCustom);
        return taskRepository.findAllByUserCustom(userCustomById);
    }

    public Task findById(Long idUserCustom, Long idTask) {
        UserCustom userCustomById = userCustomService.findById(idUserCustom);
        return taskRepository.findByUserCustomAndId(userCustomById, idTask);

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

    public List<Task> taskThatWillExpire(Long idUserCustom) {
        UserCustom userCustomById = userCustomService.findById(idUserCustom);
        return taskRepository.findTaskByUserCustomAndIsConcludedIsFalseAndBeginDateBeforeAndEndDateGreaterThanEqualAndEndDateIsLessThanEqual(userCustomById, LocalDate.now(), LocalDate.now(), LocalDate.now().plusDays(5));
    }

    public List<Task> tasksConcluded(Long idUserCustom) {
        UserCustom userCustomById = userCustomService.findById(idUserCustom);
        return taskRepository.findTaskByUserCustomAndIsConcludedIsTrue(userCustomById);
    }

    public List<Task> tasksScheduler(Long idUserCustom) {
        UserCustom userCustomById = userCustomService.findById(idUserCustom);
        return taskRepository.findTaskByUserCustomAndBeginDateAfterAndIsConcludedIsFalse(userCustomById, LocalDate.now());
    }

    public List<Task> tasksPending(Long idUserCustom) {
        UserCustom userCustomById = userCustomService.findById(idUserCustom);
        return taskRepository.findTaskByUserCustomAndBeginDateBeforeAndIsConcludedIsFalse(userCustomById, LocalDate.now());
    }


    private Task updatedUserCustomFromTask(Task task) {
        Long idUserCustom = task.getUserCustom().getId();
        UserCustom userCustomById = userCustomService.findById(idUserCustom);
        task.setUserCustom(userCustomById);
        return task;
    }


}
