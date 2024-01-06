package proj.cloud.ath.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.cloud.ath.service.PowertrainTypeService;
import proj.cloud.ath.model.PowertrainType;
import proj.cloud.ath.response.RestApiResponse;

@RestController
@RequestMapping("/powertrain-types")
@CrossOrigin(origins = { "https://auto-trade-back-office.netlify.app/" })
public class PowertrainTypeController {

    @Autowired
    private PowertrainTypeService service;

    @GetMapping
    public RestApiResponse findAll() {
        return new RestApiResponse(service.findAll(), 200);
    }

    @GetMapping("/{id}")
    public RestApiResponse findById(@PathVariable Long id) {
        return new RestApiResponse(service.findById(id), 200);
    }

    @PostMapping
    public RestApiResponse create(@RequestBody PowertrainType powertrainType) {
        RestApiResponse response = new RestApiResponse();
        powertrainType.setState(0);
        service.save(powertrainType);
        response.setPayload(powertrainType);
        response.setStatus(201);
        return response;
    }

    @PutMapping
    public RestApiResponse update(@RequestBody PowertrainType powertrainType) {
        RestApiResponse response = new RestApiResponse();
        response.setStatus(400);
        PowertrainType oldPowertrainType = service.findById(powertrainType.getId());
        if (oldPowertrainType != null) {
            oldPowertrainType.setName(powertrainType.getName());
            service.save(oldPowertrainType);
            response.setStatus(200);
            response.setPayload(oldPowertrainType);
        }
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
