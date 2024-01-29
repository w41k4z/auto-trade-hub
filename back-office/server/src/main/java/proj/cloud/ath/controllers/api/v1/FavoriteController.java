package proj.cloud.ath.controllers.api.v1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import proj.cloud.ath.entities.Favorite;
import proj.cloud.ath.response.RestApiResponse;
import proj.cloud.ath.services.FavoriteService;
import proj.cloud.ath.utils.JwtUtil;

@RestController
public class FavoriteController {

    @Autowired
    private FavoriteService service;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping
    public RestApiResponse create(
            @RequestHeader(value = "Authorization") String bearerToken, @RequestBody Favorite favorite) {
        String token = bearerToken.substring(7);
        RestApiResponse response = new RestApiResponse();
        if (jwtUtil.isValidToken(token)) {
            service.save(favorite);
            response.setPayload(favorite);
            response.setStatus(201);
        } else {
            response.setMessage("Invalid token");
            response.setStatus(403);
        }
        return response;
    }
}
