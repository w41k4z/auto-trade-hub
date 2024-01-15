package proj.cloud.ath.controllers.api.v1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.cloud.ath.entities.CarModel;
import proj.cloud.ath.response.RestApiResponse;
import proj.cloud.ath.services.CarModelService;

@RestController
@RequestMapping("/api/v1/car-models")
public class CarModelController {

    @Autowired
    private CarModelService service;

    @GetMapping
    public RestApiResponse findAll() {
        return new RestApiResponse(service.findAll(), 200);
    }

    @GetMapping("/{id}")
    public RestApiResponse findById(@PathVariable Long id) {
        return new RestApiResponse(service.findById(id), 200);
    }

    @PostMapping
    public RestApiResponse create(@RequestBody CarModel carModel) {
        RestApiResponse response = new RestApiResponse();
        carModel.setState(0);
        service.save(carModel);
        response.setPayload(carModel);
        response.setStatus(201);
        return response;
    }

    @DeleteMapping("/{id}")
    public RestApiResponse delete(@PathVariable Long id) {
        RestApiResponse response = new RestApiResponse();
        service.delete(id);
        response.setStatus(200);
        return response;
    }
}
