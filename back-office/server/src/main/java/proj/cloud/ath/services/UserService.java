package proj.cloud.ath.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import proj.cloud.ath.entities.User;
import proj.cloud.ath.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public User authenticate(String email, String password) {
        Optional<User> user = this.findByEmail(email);
        if (user.isPresent()) {
            if (BCrypt.checkpw(password, user.get().getPassword())) {
                return user.get();
            }
        }
        throw new IllegalArgumentException("Wrong credentials");
    }

    public Optional<User> findByEmail(String email) {
        return repository.findByEmail(email);
    }

    public User findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<User> findAll() {
        return repository.findAll();
    }

    public User save(User user) {
        return repository.save(user);
    }

    public void delete(Long id) {
        User user = this.findById(id);
        if (user == null) {
            return;
        }
        repository.delete(user);
    }
}
