package proj.cloud.ath.repositories.postgres;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.commission.Commission;

public interface CommissionRepository extends JpaRepository<Commission, Long> {

}
