package proj.cloud.ath.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import proj.cloud.ath.entities.CarModel;
import proj.cloud.ath.repositories.CarModelRepository;

@Service
public class CarModelService {

    @Autowired
    private CarModelRepository carModelRepository;

    public CarModel findById(Long id) {
        return carModelRepository.findById(id).orElse(null);
    }

    public List<CarModel> findAll() {
        CarModel carModel = new CarModel();
        carModel.setState(0);
        return carModelRepository.findAll(Example.of(carModel));
    }

    public CarModel save(CarModel carModel) {
        return carModelRepository.save(carModel);
    }

    public void delete(Long id) {
        CarModel carModel = this.findById(id);
        if (carModel == null) {
            return;
        }
        carModel.setState(-1);
        this.save(carModel);
    }
}
