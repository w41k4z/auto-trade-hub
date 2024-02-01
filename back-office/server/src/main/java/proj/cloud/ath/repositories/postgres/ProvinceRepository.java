package proj.cloud.ath.repositories.postgres;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.Province;

public interface ProvinceRepository extends JpaRepository<Province, Long> {

}
