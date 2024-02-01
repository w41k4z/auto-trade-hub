package proj.cloud.ath.repositories.postgres;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.PowertrainType;

public interface PowertrainTypeRepository extends JpaRepository<PowertrainType, Long> {
}
