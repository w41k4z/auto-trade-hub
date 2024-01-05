package proj.cloud.ath.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.model.PowertrainType;

public interface PowertrainTypeRepository extends JpaRepository<PowertrainType, Long> {
}
