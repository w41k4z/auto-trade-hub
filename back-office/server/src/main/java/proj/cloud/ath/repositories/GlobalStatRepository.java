package proj.cloud.ath.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.stat.GlobalStat;

public interface GlobalStatRepository extends JpaRepository<GlobalStat, Integer> {

}
