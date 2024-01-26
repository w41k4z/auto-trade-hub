package proj.cloud.ath.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import proj.cloud.ath.entities.Commission;
import proj.cloud.ath.entities.VCommission;
import proj.cloud.ath.repositories.CommissionRepository;
import proj.cloud.ath.repositories.VCommissionRepository;

@Service
public class CommissionService {

    @Autowired
    private CommissionRepository repository;

    @Autowired
    private VCommissionRepository _repository;

    public Commission findById(Long id) {
        return _repository.findById(id).orElse(null);
    }

    public List<Commission> findAll() {
        List<VCommission> vcommissions = _repository.findAll();
        List<Commission> commissions = new ArrayList<>();
        for (VCommission commission : vcommissions) {
            commissions.add(commission);
        }
        return commissions;
    }

    public Commission save(Commission brand) {
        return repository.save(brand);
    }

    public void delete(Long id) {
        Commission commission = this.findById(id);
        if (commission == null) {
            return;
        }
        repository.delete(commission);
    }

}
