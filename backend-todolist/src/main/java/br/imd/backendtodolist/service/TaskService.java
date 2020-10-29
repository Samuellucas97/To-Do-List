package br.imd.backendtodolist.service;

import br.imd.backendtodolist.exception.ResourceNotFoundException;
import br.imd.backendtodolist.model.Task;
import br.imd.backendtodolist.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    public List<Task> listAll() {
        return taskRepository.findAll();
    }

    @Transactional
    public Task save(Task task) {
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
        taskRepository.save(task);
    }

    public List<Task> tasksConcluded() { return taskRepository.findTaskByIsConcludedIsTrue(); }

    public List<Task> tasksScheduler() { return taskRepository.findTaskByBeginDateAfterAndIsConcludedIsFalse(LocalDate.now()); }

    public List<Task> tasksPending() { return taskRepository.findTaskByEndDateBeforeAndIsConcludedIsFalse(LocalDate.now()); }
}
