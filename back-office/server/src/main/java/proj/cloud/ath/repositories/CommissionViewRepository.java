package proj.cloud.ath.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.commission.CommissionView;

public interface CommissionViewRepository extends JpaRepository<CommissionView, Long> {

}
