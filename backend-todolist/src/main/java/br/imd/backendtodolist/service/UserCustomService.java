package br.imd.backendtodolist.service;

import br.imd.backendtodolist.model.Task;
import br.imd.backendtodolist.model.UserCustom;
import br.imd.backendtodolist.repository.UserCustomRepository;
import br.imd.backendtodolist.security.PasswordConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class UserCustomService implements UserDetailsService {
    private final UserCustomRepository userCustomRepository;

    @Transactional
    public UserCustom save(UserCustom userCustom) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);
        userCustom.setPassword(bCryptPasswordEncoder.encode(userCustom.getPassword()) );
        return userCustomRepository.save(userCustom);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        final UserCustom user = userCustomRepository.findByUsername(username);

        if (user == null)
            throw new UsernameNotFoundException(String.format("Username %s not found!", username));

        return user;
    }
}