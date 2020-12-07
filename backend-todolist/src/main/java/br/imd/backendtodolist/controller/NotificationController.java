package br.imd.backendtodolist.controller;

import br.imd.backendtodolist.model.Notification;
import br.imd.backendtodolist.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.Min;
import java.util.List;

@RestController
@RequestMapping("notification")
@RequiredArgsConstructor
public class NotificationController {
    private final NotificationService notificationService;

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Notification>> listAll(@PathVariable("id")
      @Min(value = 0, message = "The id atribute has a value of 0 as the lowest value") Long idUserCustom) {
        return ResponseEntity.ok(notificationService.listAll(idUserCustom));
    }
}
