package proj.cloud.ath.repositories.postgres;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.stat.BrandRanking;

public interface BrandRankingRepository extends JpaRepository<BrandRanking, Long> {

}
