package com.example.springbootprojectkotlin.controller

data class TaskDTORequest (
    var title: String? = "",
    var description: String? = "",
    var state: String? = ""
)