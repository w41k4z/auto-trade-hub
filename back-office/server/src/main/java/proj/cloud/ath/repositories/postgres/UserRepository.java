package proj.cloud.ath.repositories.postgres;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

    public Optional<User> findByEmail(String email);
}
