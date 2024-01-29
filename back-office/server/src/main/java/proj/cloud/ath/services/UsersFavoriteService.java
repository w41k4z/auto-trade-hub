package proj.cloud.ath.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import proj.cloud.ath.entities.UsersFavorite;
import proj.cloud.ath.repositories.UsersFavoriteRepository;

@Service
public class UsersFavoriteService {

    @Autowired
    private UsersFavoriteRepository repository;

    

    public UsersFavorite findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<UsersFavorite> findAll() {
        return repository.findAll();
    }

    public UsersFavorite save(UsersFavorite user) {
        return repository.save(user);
    }

    public void delete(Long id) {
        UsersFavorite user = this.findById(id);
        if (user == null) {
            return;
        }
        repository.delete(user);
    }
}
