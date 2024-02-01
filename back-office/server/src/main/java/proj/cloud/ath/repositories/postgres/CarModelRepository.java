package proj.cloud.ath.repositories.postgres;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.CarModel;

public interface CarModelRepository extends JpaRepository<CarModel, Long> {

}
