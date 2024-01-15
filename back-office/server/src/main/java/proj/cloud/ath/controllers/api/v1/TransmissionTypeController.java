package proj.cloud.ath.controllers.api.v1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.cloud.ath.services.TransmissionTypeService;
import proj.cloud.ath.entities.TransmissionType;
import proj.cloud.ath.response.RestApiResponse;

@RestController
@RequestMapping("/api/v1/transmission-types")
public class TransmissionTypeController {

    @Autowired
    private TransmissionTypeService service;

    @GetMapping
    public RestApiResponse findAll() {
        return new RestApiResponse(service.findAll(), 200);
    }

    @GetMapping("/{id}")
    public RestApiResponse findById(@PathVariable Long id) {
        return new RestApiResponse(service.findById(id), 200);
    }

    @PostMapping
    public RestApiResponse create(@RequestBody TransmissionType transmissionType) {
        RestApiResponse response = new RestApiResponse();
        transmissionType.setState(0);
        service.save(transmissionType);
        response.setPayload(transmissionType);
        response.setStatus(201);
        return response;
    }

    @PutMapping
    public RestApiResponse update(@RequestBody TransmissionType transmissionType) {
        RestApiResponse response = new RestApiResponse();
        response.setStatus(400);
        TransmissionType oldTransmissionType = service.findById(transmissionType.getId());
        if (oldTransmissionType != null) {
            oldTransmissionType.setName(transmissionType.getName());
            service.save(oldTransmissionType);
            response.setStatus(200);
            response.setPayload(oldTransmissionType);
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
