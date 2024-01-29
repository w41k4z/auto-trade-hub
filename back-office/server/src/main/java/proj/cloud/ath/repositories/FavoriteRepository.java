package proj.cloud.ath.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.Favorite;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {


}
