package proj.cloud.ath.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import proj.cloud.ath.entities.TransmissionType;
import proj.cloud.ath.repositories.TransmissionTypeRepository;

@Service
public class TransmissionTypeService {

    @Autowired
    private TransmissionTypeRepository repositories;

    public TransmissionType findById(Long id) {
        return repositories.findById(id).orElse(null);
    }

    public List<TransmissionType> findAll() {
        TransmissionType transmissionType = new TransmissionType();
        transmissionType.setState(0);
        return repositories.findAll(Example.of(transmissionType));
    }

    public TransmissionType save(TransmissionType transmissionType) {
        return repositories.save(transmissionType);
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
