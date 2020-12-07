package br.imd.backendtodolist.controller;

import br.imd.backendtodolist.model.Task;
import br.imd.backendtodolist.model.UserCustom;
import br.imd.backendtodolist.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import java.util.List;

@RestController
@Validated
@RequestMapping("tasks")
@AllArgsConstructor
public class TaskController {
    private final TaskService taskService;

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Task>> listAll( @PathVariable("id")
        @Min(value = 0, message = "The id atribute has a value of 0 as the lowest value") Long idUserCustom) {
        return ResponseEntity.ok(taskService.listAll(idUserCustom));
    }

    @PostMapping(path = "", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Task> save(@RequestBody @Valid TaskDTO task) {
        return ResponseEntity.ok(taskService.save(task.toDomain()));
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id")
        @Min(value = 0, message = "The id atribute has a value of 0 as the lowest value") Long idTask) {
            taskService.delete(idTask);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping(path = "", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> update(@RequestBody @Valid TaskDTO task) {
        taskService.update(task.toDomain());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @GetMapping(path = "/concluded/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Task>> tasksConcluded(@PathVariable("id")
        @Min(value = 0, message = "The id atribute has a value of 0 as the lowest value") Long idUserCustom) {
            return ResponseEntity.ok(taskService.tasksConcluded(idUserCustom));
    }

    @GetMapping(path = "/scheduler/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Task>> tasksScheduler(@PathVariable("id")
        @Min(value = 0, message = "The id atribute has a value of 0 as the lowest value") Long idUserCustom) {
            return ResponseEntity.ok(taskService.tasksScheduler(idUserCustom));
    }

    @GetMapping(path = "/pending/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Task>> tasksPending(@PathVariable("id")
       @Min(value = 0, message = "The id atribute has a value of 0 as the lowest value") Long idUserCustom ) {
        return ResponseEntity.ok(taskService.tasksPending(idUserCustom));
    }
}