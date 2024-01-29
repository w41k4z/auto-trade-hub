package proj.cloud.ath.controllers.api.v1;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.cloud.ath.dto.Ranking;
import proj.cloud.ath.response.RestApiResponse;
import proj.cloud.ath.services.StatService;
import proj.cloud.ath.utils.JwtUtil;

@RestController
@RequestMapping("/api/v1/stats")
public class StatController {

    @Autowired
    private StatService service;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/global")
    public RestApiResponse globalStat(@RequestHeader(value = "Authorization") String bearerToken) {
        String token = bearerToken.substring(7);
        RestApiResponse response = new RestApiResponse();
        if (jwtUtil.isValidToken(token)) {
            response = new RestApiResponse(service.getGlobalStat(), 200);
        } else {
            response.setMessage("Invalid token");
            response.setStatus(403);
        }
        return response;
    }

    @GetMapping("/annual-sales")
    public RestApiResponse annualSales(@RequestHeader(value = "Authorization") String bearerToken) {
        String token = bearerToken.substring(7);
        RestApiResponse response = new RestApiResponse();
        if (jwtUtil.isValidToken(token)) {
            response = new RestApiResponse(service.getAnnualSales(), 200);
        } else {
            response.setMessage("Invalid token");
            response.setStatus(403);
        }
        return response;
    }

    @GetMapping("/monthly-sales")
    public RestApiResponse monthlySales(@RequestHeader(value = "Authorization") String bearerToken) {
        String token = bearerToken.substring(7);
        RestApiResponse response = new RestApiResponse();
        if (jwtUtil.isValidToken(token)) {
            response = new RestApiResponse(service.getMonthlySales(), 200);
        } else {
            response.setMessage("Invalid token");
            response.setStatus(403);
        }
        return response;
    }

    @PostMapping("/province-ranking")
    public RestApiResponse provinceRanking(@RequestHeader(value = "Authorization") String bearerToken,
            @RequestBody Ranking ranking) {
        String token = bearerToken.substring(7);
        RestApiResponse response = new RestApiResponse();
        if (jwtUtil.isValidToken(token)) {
            LocalDate now = LocalDate.now();
            int currentMonth = now.getMonthValue();
            int currentYear = now.getYear();
            Integer monthValue = ranking.getMonth() != null ? ranking.getMonth() : currentMonth;
            Integer yearValue = ranking
                    .getYear() != null ? ranking.getYear() : currentYear;
            response = new RestApiResponse(service.getProvinceRanking(monthValue, yearValue), 200);
        } else {
            response.setMessage("Invalid token");
            response.setStatus(403);
        }
        return response;
    }

    @PostMapping("/brand-ranking")
    public RestApiResponse brandRanking(@RequestHeader(value = "Authorization") String bearerToken,
            @RequestBody Ranking ranking) {
        String token = bearerToken.substring(7);
        RestApiResponse response = new RestApiResponse();
        if (jwtUtil.isValidToken(token)) {
            LocalDate now = LocalDate.now();
            int currentMonth = now.getMonthValue();
            int currentYear = now.getYear();
            Integer monthValue = ranking.getMonth() != null && !ranking.getMonth().equals("") ? ranking.getMonth()
                    : currentMonth;
            Integer yearValue = ranking.getYear() != null ? ranking.getYear() : currentYear;
            response = new RestApiResponse(service.getBrandRanking(monthValue, yearValue), 200);
        } else {
            response.setMessage("Invalid token");
            response.setStatus(403);
        }
        return response;
    }
}
