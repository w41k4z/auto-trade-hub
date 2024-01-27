package proj.cloud.ath.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.Announcement;

public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {
    
}
