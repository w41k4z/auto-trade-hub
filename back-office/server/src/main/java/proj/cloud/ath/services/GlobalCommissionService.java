package proj.cloud.ath.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import proj.cloud.ath.entities.commission.GlobalCommission;
import proj.cloud.ath.repositories.GlobalCommissionRepository;

@Service
public class GlobalCommissionService {

    @Autowired
    private GlobalCommissionRepository repository;

    public List<GlobalCommission> findAll() {
        return repository.findAll();
    }

    public GlobalCommission save(GlobalCommission brand) {
        return repository.save(brand);
    }
}
