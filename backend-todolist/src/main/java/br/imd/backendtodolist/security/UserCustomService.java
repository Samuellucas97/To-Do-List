package br.imd.backendtodolist.security;

import br.imd.backendtodolist.model.UserCustom;
import br.imd.backendtodolist.repository.UserCustomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserCustomService implements UserDetailsService {
    private final UserCustomRepository userCustomRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        final UserCustom user = userCustomRepository.findByUsername(username);

        if (user == null)
            throw new UsernameNotFoundException(String.format("Username %s not found!", username));

        return user;
    }
}
