package br.imd.backendtodolist.repository;

import br.imd.backendtodolist.model.Notification;
import br.imd.backendtodolist.model.UserCustom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
    public List<Notification> findAllByUserCustom(UserCustom userCustom);
    public Notification findByIsReadFalse();
}
