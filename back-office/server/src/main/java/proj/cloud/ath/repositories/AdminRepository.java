package proj.cloud.ath.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

    public Optional<Admin> findByEmail(String email);
}
