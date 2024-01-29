package proj.cloud.ath.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.stat.MonthlySales;

public interface MonthlySalesRepository extends JpaRepository<MonthlySales, Integer> {

}
