package br.imd.backendtodolist.repository;

import br.imd.backendtodolist.model.UserCustom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserCustomRepository  extends JpaRepository<UserCustom, Long> {
    UserCustom findByUsername(String username);
    Boolean existsByUsername(String username);
}
