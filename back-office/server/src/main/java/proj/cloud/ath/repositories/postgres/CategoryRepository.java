package proj.cloud.ath.repositories.postgres;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
