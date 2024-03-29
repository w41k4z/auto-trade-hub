package proj.cloud.ath.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.TransmissionType;

public interface TransmissionTypeRepository extends JpaRepository<TransmissionType, Long> {
}
