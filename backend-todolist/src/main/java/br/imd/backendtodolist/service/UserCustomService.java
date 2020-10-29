package br.imd.backendtodolist.service;

import br.imd.backendtodolist.exception.InvalidUsernamePasswordException;
import br.imd.backendtodolist.exception.UsernameAlreadyInUseException;
import br.imd.backendtodolist.model.Role;
import br.imd.backendtodolist.model.UserCustom;
import br.imd.backendtodolist.repository.UserCustomRepository;
import br.imd.backendtodolist.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserCustomService {

    @Autowired
    private UserCustomRepository userCustomRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private AuthenticationManager authenticationManager;

    public String signin(String username, String password) {
        try {

            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
            return "Bearer " + jwtTokenProvider.createToken(username, userCustomRepository.findByUsername(username).getRole().getAuthority());
        } catch (AuthenticationException e) {
            throw new InvalidUsernamePasswordException("Invalid username/password supplied", HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    public void signup(UserCustom user) {
        if (!userCustomRepository.existsByUsername(user.getUsername())) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            user.setRole(Role.ROLE_CLIENT);
            userCustomRepository.save(user);
        } else {
            throw new UsernameAlreadyInUseException("Username is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
}
