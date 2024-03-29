package proj.cloud.ath.controllers.api.v1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.cloud.ath.entities.Province;
import proj.cloud.ath.response.RestApiResponse;
import proj.cloud.ath.services.ProvinceService;
import proj.cloud.ath.utils.JwtUtil;

@RestController
@RequestMapping("/api/v1/provinces")
public class ProvinceController {

    @Autowired
    private ProvinceService service;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping
    public RestApiResponse findAll(@RequestHeader(value = "Authorization") String bearerToken) {
        String token = bearerToken.substring(7);
        RestApiResponse response = new RestApiResponse();
        if (jwtUtil.isValidToken(token)) {
            response = new RestApiResponse(service.findAll(), 200);
        } else {
            response.setMessage("Invalid token");
            response.setStatus(403);
        }
        return response;
    }

    @GetMapping("/{id}")
    public RestApiResponse findById(@RequestHeader(value = "Authorization") String bearerToken, @PathVariable Long id) {
        String token = bearerToken.substring(7);
        RestApiResponse response = new RestApiResponse();
        if (jwtUtil.isValidToken(token)) {
            response = new RestApiResponse(service.findById(id), 200);
        } else {
            response.setMessage("Invalid token");
            response.setStatus(403);
        }
        return response;
    }

    @PostMapping
    public RestApiResponse create(
            @RequestHeader(value = "Authorization") String bearerToken, @RequestBody Province province) {
        String token = bearerToken.substring(7);
        RestApiResponse response = new RestApiResponse();
        if (jwtUtil.isValidToken(token)) {
            service.save(province);
            response.setPayload(province);
            response.setStatus(201);
        } else {
            response.setMessage("Invalid token");
            response.setStatus(403);
        }
        return response;
    }

    @PutMapping
    public RestApiResponse update(@RequestHeader(value = "Authorization") String bearerToken,
            @RequestBody Province province) {
        String token = bearerToken.substring(7);
        RestApiResponse response = new RestApiResponse();
        if (jwtUtil.isValidToken(token)) {
            response.setStatus(400);
            Province oldProvince = service.findById(province.getId());
            if (oldProvince != null) {
                oldProvince.setName(province.getName());
                service.save(oldProvince);
                response.setStatus(200);
                response.setPayload(oldProvince);
            }
        } else {
            response.setMessage("Invalid token");
            response.setStatus(403);
        }
        return response;
    }

    @DeleteMapping("/{id}")
    public RestApiResponse delete(@RequestHeader(value = "Authorization") String bearerToken, @PathVariable Long id) {
        String token = bearerToken.substring(7);
        RestApiResponse response = new RestApiResponse();
        if (jwtUtil.isValidToken(token)) {
            service.delete(id);
            response.setStatus(200);
        } else {
            response.setMessage("Invalid token");
            response.setStatus(403);
        }
        return response;
    }
}
