package proj.cloud.ath.controllers.api.v1;

import java.util.HashMap;

import org.mindrot.jbcrypt.BCrypt;
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

import proj.cloud.ath.entities.User;
import proj.cloud.ath.response.RestApiResponse;
import proj.cloud.ath.services.postgres.UserService;
import proj.cloud.ath.services.postgres.UsersFavoriteService;
import proj.cloud.ath.utils.JwtUtil;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserService service;

    @Autowired
    private UsersFavoriteService usersFavoriteservice;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping
    public RestApiResponse findAll() {
        return new RestApiResponse(service.findAll(), 200);
    }

    @GetMapping("/{id}/Announcements")
    public RestApiResponse findAllAnnouncements(Long id) {
        return new RestApiResponse(usersFavoriteservice.findById(id).getAnnouncement(), 200);
    }

    @GetMapping("/{id}/Announcements_Favorite")
    public RestApiResponse findAllAnnouncementFavorite(Long id) {
        return new RestApiResponse(usersFavoriteservice.findById(id).getAnnouncementFavorite(), 200);
    }

    @GetMapping("/{id}")
    public RestApiResponse findById(@PathVariable Long id) {
        return new RestApiResponse(service.findById(id), 200);
    }

    @PostMapping
    public RestApiResponse create(@RequestBody User user) {
        RestApiResponse response = new RestApiResponse();
        user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
        service.save(user);

        HashMap<String, Object> payload = new HashMap<>();
        HashMap<String, Object> claims = new HashMap<>();
        claims.put("role", "USER");
        String token = jwtUtil.generateToken(claims, user.getEmail());
        payload.put("accessToken", token);

        response.setStatus(201);
        response.setPayload(payload);
        return response;
    }

    @PutMapping
    public RestApiResponse update(@RequestHeader(value = "Authorization") String bearerToken, @RequestBody User user) {
        String token = bearerToken.substring(7);
        RestApiResponse response = new RestApiResponse();
        response.setStatus(400);
        if (jwtUtil.isValidToken(token) && (jwtUtil.getSubjectFromToken(token).equals(user.getEmail())
                || jwtUtil.getClaimFromToken(token, "role").equals("ADMIN"))) {
            User oldUser = service.findById(user.getId());
            if (oldUser != null) {
                oldUser.setName(user.getName());
                oldUser.setFirstName(user.getFirstName());
                oldUser.setBirthDate(user.getBirthDate());
                oldUser.setPhoneNumber(user.getPhoneNumber());
                oldUser.setGenre(user.getGenre());
                service.save(oldUser);
                response.setStatus(200);
                response.setPayload(oldUser);
            }
        }
        return response;
    }

    @DeleteMapping("/{id}")
    public RestApiResponse delete(@RequestHeader(value = "Authorization") String bearerToken, @PathVariable Long id) {
        String token = bearerToken.substring(7);
        RestApiResponse response = new RestApiResponse();
        if (jwtUtil.isValidToken(token) && jwtUtil.getClaimFromToken(token, "role").equals("ADMIN")) {
            service.delete(id);
            response.setStatus(200);
        } else {
            response.setMessage("Invalid token");
            response.setStatus(403);
        }
        return response;
    }
}
