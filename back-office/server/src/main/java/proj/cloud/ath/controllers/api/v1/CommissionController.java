package proj.cloud.ath.controllers.api.v1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import proj.cloud.ath.entities.commission.Commission;
import proj.cloud.ath.entities.commission.GlobalCommission;
import proj.cloud.ath.response.RestApiResponse;
import proj.cloud.ath.services.CommissionService;
import proj.cloud.ath.services.GlobalCommissionService;

@RestController
@RequestMapping("/api/v1/commissions")
public class CommissionController {

    @Autowired
    private CommissionService service;

    @Autowired
    private GlobalCommissionService _service;

    @GetMapping
    public RestApiResponse findAll() {
        return new RestApiResponse(service.findAll(), 200);
    }

    @GetMapping("/{id}")
    public RestApiResponse findById(@PathVariable Long id) {
        return new RestApiResponse(service.findById(id), 200);
    }

    @PostMapping
    public RestApiResponse create(@RequestBody Commission commission) {
        RestApiResponse response = new RestApiResponse();
        commission.setFromDate(new java.sql.Timestamp(System.currentTimeMillis()));
        service.save(commission);
        response.setPayload(commission);
        response.setStatus(201);
        return response;
    }

    @PostMapping("/global")
    public RestApiResponse createGlobal(@RequestBody GlobalCommission commission) {
        RestApiResponse response = new RestApiResponse();
        commission.setFromDate(new java.sql.Timestamp(System.currentTimeMillis()));
        _service.save(commission);
        response.setPayload(commission);
        response.setStatus(201);
        return response;
    }
}
