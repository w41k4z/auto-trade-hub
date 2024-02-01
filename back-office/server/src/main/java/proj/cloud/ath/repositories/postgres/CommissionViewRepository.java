package proj.cloud.ath.repositories.postgres;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.commission.CommissionView;

public interface CommissionViewRepository extends JpaRepository<CommissionView, Long> {

    public CommissionView findByCarModelId(Long id);
}
