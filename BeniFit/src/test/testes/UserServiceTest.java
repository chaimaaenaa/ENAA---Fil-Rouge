package com.benefit.testes;

import com.benefit.model.User;
import com.benefit.repositories.UserRepository;
import com.benefit.services.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    void testFindUserById_ExistingUser() {
        // Mock user bach ndiro test 3lih
        User user = new User();
        user.setId(1L);
        user.setEmail("user@example.com");

        when(userRepository.findById(1L)).thenReturn(Optional.of(user));

        User foundUser = userService.findUserById(1L);

        assertNotNull(foundUser);
        assertEquals("user@example.com", foundUser.getEmail());
    }

    @Test
    void testFindUserById_UserNotFound() {
        when(userRepository.findById(1L)).thenReturn(Optional.empty());

        // Ila makanch user, khas l'exception tncha3
        assertThrows(RuntimeException.class, () -> userService.findUserById(1L));
    }
}
