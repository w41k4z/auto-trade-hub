package proj.cloud.ath.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.model.TransmissionType;

public interface TransmissionTypeRepository extends JpaRepository<TransmissionType, Long> {
}
