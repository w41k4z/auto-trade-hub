package proj.cloud.ath.services;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
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
        Announcement announcement = new Announcement();
        announcement.setStatus(10);
        return announcementRepository.findAll(Example.of(announcement));
    }

    public List<Announcement> findAllPendingAnnouncements() {
        Announcement announcement = new Announcement();
        announcement.setStatus(0);
        return announcementRepository.findAll(Example.of(announcement));
    }

    public void validatePurchase(Announcement announcement) {
        announcement.setStatus(20);
        announcement.setSale_date(new Date(System.currentTimeMillis()));
        announcementRepository.save(announcement);
    }

    public void validateAnnouncement(Announcement announcement) {
        announcement.setStatus(10);
        announcement.setAnnouncement_date(new Date(System.currentTimeMillis()));
        announcementRepository.save(announcement);
    }

    public void refuseAnnouncement(Announcement announcement) {
        announcement.setStatus(-1);
        announcementRepository.save(announcement);
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
