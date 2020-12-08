package br.imd.backendtodolist.service;

import br.imd.backendtodolist.model.Notification;
import br.imd.backendtodolist.model.Task;
import br.imd.backendtodolist.model.UserCustom;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static java.time.temporal.ChronoUnit.DAYS;

@Service
@RequiredArgsConstructor
public class NotificationService {
    private final UserCustomService userCustomService;
    private final TaskService taskService;

    public List<Notification> listAll(Long idUserCustom) {
        UserCustom userCustomById = userCustomService.findById(idUserCustom);
        List<Task> tasks = taskService.taskThatWillExpire(idUserCustom);
        List<Notification> notifications = new ArrayList<>();

        LocalDate actualDate = LocalDate.now();
        LocalDate taskDate;
        long differenceDays;

        for (Task task: tasks) {
            taskDate = task.getEndDate();

            differenceDays = DAYS.between(actualDate, taskDate);

            notifications.add(
                Notification.builder()
                    .title("Faltam apenas " + differenceDays + " dia!")
                    .description("A tarefa "+ task.getTitle() + " irá vencer em " + differenceDays + "dias")
                    .isRead(false)
                    .build()
            );
        }

        return notifications;
    }
}
