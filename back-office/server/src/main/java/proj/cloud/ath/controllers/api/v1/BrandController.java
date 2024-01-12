package proj.cloud.ath.controllers.api.v1;

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

import proj.cloud.ath.entities.Brand;
import proj.cloud.ath.response.RestApiResponse;
import proj.cloud.ath.services.BrandService;
@RestController
@RequestMapping("/api/v1/brand")
@CrossOrigin(origins = { "http://localhost:3000" })
public class BrandController {
    @Autowired
    private BrandService service;

    @GetMapping
    public RestApiResponse findAll() {
        return new RestApiResponse(service.findAll(), 200);
    }

    @GetMapping("/{id}")
    public RestApiResponse findById(@PathVariable Long id) {
        return new RestApiResponse(service.findById(id), 200);
    }

    @PostMapping
    public RestApiResponse create(@RequestBody Brand brand) {
        RestApiResponse response = new RestApiResponse();
        brand.setState(0);
        service.save(brand);
        response.setPayload(brand);
        response.setStatus(201);
        return response;
    }

    @PutMapping
    public RestApiResponse update(@RequestBody Brand brand) {
        RestApiResponse response = new RestApiResponse();
        response.setStatus(400);
        Brand oldBrand = service.findById(brand.getId());
        if (oldBrand != null) {
            oldBrand.setName(brand.getName());
            service.save(oldBrand);
            response.setStatus(200);
            response.setPayload(oldBrand);
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
