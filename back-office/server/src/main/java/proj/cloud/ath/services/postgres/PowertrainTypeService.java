package proj.cloud.ath.services.postgres;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import proj.cloud.ath.entities.PowertrainType;
import proj.cloud.ath.repositories.postgres.PowertrainTypeRepository;

@Service
public class PowertrainTypeService {

    @Autowired
    private PowertrainTypeRepository repository;

    public PowertrainType findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<PowertrainType> findAll() {
        return repository.findAll();
    }

    public PowertrainType save(PowertrainType powertrainType) {
        return repository.save(powertrainType);
    }

    public void delete(Long id) {
        PowertrainType powertrainType = this.findById(id);
        if (powertrainType == null) {
            return;
        }
        repository.delete(powertrainType);
    }
}
