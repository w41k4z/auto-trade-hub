package proj.cloud.ath.controllers.api.v1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

import proj.cloud.ath.entities.commission.Commission;
import proj.cloud.ath.entities.commission.GlobalCommission;
import proj.cloud.ath.response.RestApiResponse;
import proj.cloud.ath.services.CommissionService;
import proj.cloud.ath.services.GlobalCommissionService;
import proj.cloud.ath.utils.JwtUtil;

@RestController
@RequestMapping("/api/v1/commissions")
public class CommissionController {

    @Autowired
    private CommissionService service;

    @Autowired
    private GlobalCommissionService _service;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping
    public RestApiResponse findAll() {
        return new RestApiResponse(service.findAll(), 200);
    }

    @GetMapping("/{id}")
    public RestApiResponse findById(@PathVariable Long id) {
        return new RestApiResponse(service.findById(id), 200);
    }

    @PostMapping
    public RestApiResponse create(@RequestHeader(value = "Authorization") String bearerToken,@RequestBody Commission commission) {
        String token = bearerToken.substring(7);
        RestApiResponse response = new RestApiResponse();
        if (jwtUtil.isValidToken(token)) {
            commission.setFromDate(new java.sql.Timestamp(System.currentTimeMillis()));
            service.save(commission);
            response.setPayload(commission);
            response.setStatus(201);
        } else {
            response.setMessage("Invalid token");
            response.setStatus(403);
        }
        return response;
    }

    @PostMapping("/global")
    public RestApiResponse createGlobal(@RequestHeader(value = "Authorization") String bearerToken,@RequestBody GlobalCommission commission) {
        String token = bearerToken.substring(7);
        RestApiResponse response = new RestApiResponse();
        if (jwtUtil.isValidToken(token)) {
            commission.setFromDate(new java.sql.Timestamp(System.currentTimeMillis()));
            _service.save(commission);
            response.setPayload(commission);
            response.setStatus(201);
        } else {
            response.setMessage("Invalid token");
            response.setStatus(403);
        }
        return response;
    }
}
