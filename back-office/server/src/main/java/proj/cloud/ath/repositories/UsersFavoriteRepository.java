package proj.cloud.ath.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.UsersFavorite;

public interface UsersFavoriteRepository extends JpaRepository<UsersFavorite, Long> {

}
