package com.example.springbootprojectkotlin.exception

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ResponseStatus
import java.lang.RuntimeException

@ResponseStatus(value = HttpStatus.CONFLICT, reason = "Data already exists")
class AlreadyExistException(message: String) : RuntimeException(message)