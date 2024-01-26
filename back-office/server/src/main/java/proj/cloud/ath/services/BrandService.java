package proj.cloud.ath.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import proj.cloud.ath.entities.Brand;
import proj.cloud.ath.repositories.BrandRepository;

@Service
public class BrandService {

    @Autowired
    private BrandRepository repository;

    public Brand findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<Brand> findAll() {
        return repository.findAll();
    }

    public Brand save(Brand brand) {
        return repository.save(brand);
    }

    public void delete(Long id) {
        Brand brand = this.findById(id);
        if (brand == null) {
            return;
        }
        repository.delete(brand);
    }
}
