package com.example.springbootprojectkotlin.controller

import com.example.springbootprojectkotlin.model.Task
import com.example.springbootprojectkotlin.service.TaskService
import lombok.RequiredArgsConstructor
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/task")
@RequiredArgsConstructor
class TaskController(private val taskService: TaskService) {

//    fun create() : Task = taskService
}