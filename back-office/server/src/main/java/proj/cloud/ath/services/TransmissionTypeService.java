package proj.cloud.ath.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import proj.cloud.ath.model.TransmissionType;
import proj.cloud.ath.repository.TransmissionTypeRepository;

@Service
public class TransmissionTypeService {

    @Autowired
    private TransmissionTypeRepository repository;

    public TransmissionType findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<TransmissionType> findAll() {
        TransmissionType transmissionType = new TransmissionType();
        transmissionType.setState(0);
        return repository.findAll(Example.of(transmissionType));
    }

    public TransmissionType save(TransmissionType transmissionType) {
        return repository.save(transmissionType);
    }

    public void delete(Long id) {
        TransmissionType transmissionType = this.findById(id);
        if (transmissionType == null) {
            return;
        }
        transmissionType.setState(-1);
        this.save(transmissionType);
    }
}
