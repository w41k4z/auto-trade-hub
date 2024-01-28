package proj.cloud.ath.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.commission.GlobalCommission;

public interface GlobalCommissionRepository extends JpaRepository<GlobalCommission, Long> {

}
