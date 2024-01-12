package proj.cloud.ath.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
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
        Brand brand = new Brand();
        brand.setState(0);
        return repository.findAll(Example.of(brand));
    }

    public Brand save(Brand brand) {
        return repository.save(brand);
    }

    public void delete(Long id) {
        Brand brand = this.findById(id);
        if (brand == null) {
            return;
        }
        brand.setState(-1);
        this.save(brand);
    }
}
