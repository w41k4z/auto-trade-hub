package proj.cloud.ath.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import proj.cloud.ath.entities.commission.Commission;
import proj.cloud.ath.entities.commission.CommissionView;
import proj.cloud.ath.repositories.CommissionRepository;
import proj.cloud.ath.repositories.CommissionViewRepository;

@Service
public class CommissionService {

    @Autowired
    private CommissionRepository repository;

    @Autowired
    private CommissionViewRepository _repository;

    public Commission findById(Long id) {
        return _repository.findById(id).orElse(null).toCommission();
    }

    public Commission getCommissionByCarModelId(Long id) {
        return _repository.findByCarModelId(id).toCommission();
    }

    public List<Commission> findAll() {
        List<CommissionView> vcommissions = _repository.findAll();
        List<Commission> commissions = new ArrayList<>();
        for (CommissionView vcommission : vcommissions) {
            commissions.add(vcommission.toCommission());
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
