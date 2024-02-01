package proj.cloud.ath.services.postgres;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import proj.cloud.ath.entities.TransmissionType;
import proj.cloud.ath.repositories.postgres.TransmissionTypeRepository;

@Service
public class TransmissionTypeService {

    @Autowired
    private TransmissionTypeRepository repository;

    public TransmissionType findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<TransmissionType> findAll() {
        return repository.findAll();
    }

    public TransmissionType save(TransmissionType transmissionType) {
        return repository.save(transmissionType);
    }

    public void delete(Long id) {
        TransmissionType transmissionType = this.findById(id);
        if (transmissionType == null) {
            return;
        }
        repository.delete(transmissionType);
    }
}
