package br.imd.backendtodolist.controller;

import br.imd.backendtodolist.model.Task;
import br.imd.backendtodolist.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("tasks")
@AllArgsConstructor
public class TaskController {
    private final TaskService taskService;

    @GetMapping(path = "", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Task>> listAll() {
        return ResponseEntity.ok(taskService.listAll());
    }

    @GetMapping(path = "/concluded", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Task>> tasksConcluded() { return ResponseEntity.ok(taskService.tasksConcluded()); }

    @GetMapping(path = "/scheduler", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Task>> tasksScheduler() { return ResponseEntity.ok(taskService.tasksScheduler()); }

    @GetMapping(path = "/pending", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Task>> tasksPending() { return ResponseEntity.ok(taskService.tasksPending()); }

    @CrossOrigin("*")
    @PostMapping(path = "", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Task> save(@RequestBody @Valid TaskDTO task) {
        return ResponseEntity.ok(taskService.save(task.toDomain()));
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        taskService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping(path = "", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> update(@RequestBody Task task) {
        taskService.update(task);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
