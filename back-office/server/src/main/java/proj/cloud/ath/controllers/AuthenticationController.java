package proj.cloud.ath.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.cloud.ath.entities.Admin;
import proj.cloud.ath.response.RestApiResponse;
import proj.cloud.ath.services.AdminService;
import proj.cloud.ath.utils.JwtUtil;

@RestController
@RequestMapping("/auth/v1")
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AdminService adminService;

    @PostMapping
    public RestApiResponse authenticate(@RequestBody Map<String, Object> jsonData) {
        RestApiResponse restApiResponse = new RestApiResponse();
        HashMap<String, Object> payload = new HashMap<>();
        try {
            Admin admin = adminService.authenticate(jsonData.get("email").toString(),
                    jsonData.get("password").toString());
            payload.put("role", "ADMIN");
            payload.put("accessToken", jwtUtil.generateToken(admin));
            restApiResponse.setStatus(200);
            restApiResponse.setPayload(payload);
        } catch (IllegalArgumentException e) {
            restApiResponse.setStatus(401);
            restApiResponse.setMessage(e.getMessage());
        }
        return restApiResponse;
    }
}
