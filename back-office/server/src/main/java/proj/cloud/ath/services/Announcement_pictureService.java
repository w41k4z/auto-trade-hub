package proj.cloud.ath.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import proj.cloud.ath.entities.Announcement_picture;
import proj.cloud.ath.repositories.Announcement_pictureRepository;

@Service
public class Announcement_pictureService {

    @Autowired
    private Announcement_pictureRepository announcement_pictureRepository;

    public Announcement_picture findById(Long id) {
        return announcement_pictureRepository.findById(id).orElse(null);
    }

    public List<Announcement_picture> findAll() {
        return announcement_pictureRepository.findAll();
    }

    public Announcement_picture save(Announcement_picture announcement_picture) {
        return announcement_pictureRepository.save(announcement_picture);
    }

    public void delete(Long id) {
        Announcement_picture announcement_picture = this.findById(id);
        if (announcement_picture == null) {
            return;
        }
        this.save(announcement_picture);
    }
}
