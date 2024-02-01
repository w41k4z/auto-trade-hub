package proj.cloud.ath.repositories.postgres;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.Brand;

public interface BrandRepository extends JpaRepository<Brand, Long> {

}
