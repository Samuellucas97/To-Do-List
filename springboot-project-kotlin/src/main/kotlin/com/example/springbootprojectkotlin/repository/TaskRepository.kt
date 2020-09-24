package com.example.springbootprojectkotlin.repository

import com.example.springbootprojectkotlin.model.Task
import org.springframework.data.jpa.repository.JpaRepository

interface TaskRepository : JpaRepository<Task, Long> {
}