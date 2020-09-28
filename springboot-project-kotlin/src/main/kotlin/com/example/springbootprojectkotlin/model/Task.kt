package com.example.springbootprojectkotlin.model

import java.time.LocalDateTime
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.SequenceGenerator

@Entity
@SequenceGenerator(sequenceName = "seq_task", name = "task_seq", allocationSize = 1)
data class Task (
    @Column(nullable = false)
    var title: String? = "",
    @Column(nullable = false)
    var description: String? = "",
    @Column(nullable = false)
    var state: String? = ""
) {
    @Id
    var id: Long? = null

    var createdAt: LocalDateTime? = null
    var updatedAt: LocalDateTime? = null

    fun create() : Unit {
        createdAt = LocalDateTime.now()
        updatedAt = createdAt
    }

    fun update() : Unit {
       updatedAt = LocalDateTime.now()
    }
}