package com.example.springbootprojectkotlin.controller

import com.example.springbootprojectkotlin.service.TaskService
import lombok.RequiredArgsConstructor
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/task")
@RequiredArgsConstructor
class TaskController {
    lateinit var taskService: TaskService
}