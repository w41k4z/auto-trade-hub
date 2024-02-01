package proj.cloud.ath.repositories.postgres;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.stat.AnnualSales;

public interface AnnualSalesRepository extends JpaRepository<AnnualSales, Integer> {

}
