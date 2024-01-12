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

import proj.cloud.ath.service.CategoryService;
import proj.cloud.ath.model.Category;
import proj.cloud.ath.response.RestApiResponse;

@RestController
@RequestMapping("/api/v1/powertrain-types")
@CrossOrigin(origins = { "http://localhost:3000" })
public class CategoryController {

    @Autowired
    private CategoryService service;

    @GetMapping
    public RestApiResponse findAll() {
        return new RestApiResponse(service.findAll(), 200);
    }

    @GetMapping("/{id}")
    public RestApiResponse findById(@PathVariable Long id) {
        return new RestApiResponse(service.findById(id), 200);
    }

    @PostMapping
    public RestApiResponse create(@RequestBody Category category) {
        RestApiResponse response = new RestApiResponse();
        category.setState(0);
        service.save(category);
        response.setPayload(category);
        response.setStatus(201);
        return response;
    }

    @PutMapping
    public RestApiResponse update(@RequestBody Category category) {
        RestApiResponse response = new RestApiResponse();
        response.setStatus(400);
        Category oldPowertrainType = service.findById(category.getId());
        if (oldPowertrainType != null) {
            oldPowertrainType.setName(category.getName());
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
