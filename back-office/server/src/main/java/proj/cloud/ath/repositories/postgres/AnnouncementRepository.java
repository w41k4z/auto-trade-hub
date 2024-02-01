package proj.cloud.ath.repositories.postgres;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.cloud.ath.entities.Announcement;

public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {

}
