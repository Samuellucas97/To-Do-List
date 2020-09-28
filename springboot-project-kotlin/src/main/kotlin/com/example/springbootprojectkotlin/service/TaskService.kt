package com.example.springbootprojectkotlin.service

import com.example.springbootprojectkotlin.exception.AlreadyExistException
import com.example.springbootprojectkotlin.model.Task
import com.example.springbootprojectkotlin.repository.TaskRepository
import org.springframework.data.domain.Example
import org.springframework.stereotype.Service

@Service
class TaskService (private val taskRepository: TaskRepository) {

//    private doCreate(task: Task) : Task {
//        task.cre
//        taskRepository.save()
//        return
//    }

    private fun checkBeforeCreate(task: Task) {
        if (exist(task) )
            throw AlreadyExistException("Resource already exist: $task")
    }

    private fun exist(task: Task) : Boolean = taskRepository.exists(Example.of(task))

}