package proj.cloud.ath.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import proj.cloud.ath.entities.Province;
import proj.cloud.ath.repositories.ProvinceRepository;

@Service
public class ProvinceService {

    @Autowired
    private ProvinceRepository repository;

    public Province findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<Province> findAll() {
        return repository.findAll();
    }

    public Province save(Province province) {
        return repository.save(province);
    }

    public void delete(Long id) {
        Province province = this.findById(id);
        if (province == null) {
            return;
        }
        repository.delete(province);
    }
}
