package com.example.springbootprojectkotlin.controller

import java.time.LocalDateTime

data class TaskDTOResponse (
    var title: String? = "",
    var description: String? = "",
    var state: String? = "",
    var createdAt: LocalDateTime = LocalDateTime.now(),
    var updatedAt: LocalDateTime = LocalDateTime.now()
)