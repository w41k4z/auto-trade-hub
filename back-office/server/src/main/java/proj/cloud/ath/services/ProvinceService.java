package proj.cloud.ath.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
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
        Province province = new Province();
        province.setState(0);
        return repository.findAll(Example.of(province));
    }

    public Province save(Province province) {
        return repository.save(province);
    }

    public void delete(Long id) {
        Province province = this.findById(id);
        if (province == null) {
            return;
        }
        province.setState(-1);
        this.save(province);
    }
}
