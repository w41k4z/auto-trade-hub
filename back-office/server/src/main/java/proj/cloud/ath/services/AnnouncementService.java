package proj.cloud.ath.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import proj.cloud.ath.entities.Announcement;
import proj.cloud.ath.repositories.AnnouncementRepository;

@Service
public class AnnouncementService {

    @Autowired
    private AnnouncementRepository announcementRepository;

    public Announcement findById(Long id) {
        return announcementRepository.findById(id).orElse(null);
    }

    public List<Announcement> findAll() {
        return announcementRepository.findAll();
    }

    public Announcement save(Announcement announcement) {
        return announcementRepository.save(announcement);
    }

    public void delete(Long id) {
        Announcement announcement = this.findById(id);
        if (announcement == null) {
            return;
        }
        this.save(announcement);
    }
}
