package br.imd.backendtodolist.service;

import br.imd.backendtodolist.model.Notification;
import br.imd.backendtodolist.model.UserCustom;
import br.imd.backendtodolist.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NotificationService {
    private final NotificationRepository notificationRepository;
    private final UserCustomService userCustomService;

    public List<Notification> listAll(Long idUserCustom) {
        UserCustom userCustomById = userCustomService.findById(idUserCustom);
        return notificationRepository.findAllByUserCustom(userCustomById);
    }
}
