package proj.cloud.ath.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import proj.cloud.ath.model.PowertrainType;
import proj.cloud.ath.repository.PowertrainTypeRepository;

@Service
public class PowertrainTypeService {

    @Autowired
    private PowertrainTypeRepository repository;

    public PowertrainType findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<PowertrainType> findAll() {
        PowertrainType powertrainType = new PowertrainType();
        powertrainType.setState(0);
        return repository.findAll(Example.of(powertrainType));
    }

    public PowertrainType save(PowertrainType powertrainType) {
        return repository.save(powertrainType);
    }

    public void delete(Long id) {
        PowertrainType powertrainType = this.findById(id);
        if (powertrainType == null) {
            return;
        }
        powertrainType.setState(-1);
        this.save(powertrainType);
    }
}
