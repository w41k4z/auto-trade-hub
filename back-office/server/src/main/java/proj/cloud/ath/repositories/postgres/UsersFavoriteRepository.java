package proj.cloud.ath.repositories.postgres;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.UsersFavorite;

public interface UsersFavoriteRepository extends JpaRepository<UsersFavorite, Long> {

}
