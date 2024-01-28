package proj.cloud.ath.utils;

import java.util.Date;
import java.util.Map;
import java.util.function.Function;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import proj.cloud.ath.entities.Admin;

@Component
public class JwtUtil {

    private SecretKey key = Jwts.SIG.HS256.key().build();

    public static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60;

    public String getSubjectFromToken(String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    public Date getExpirationDateFromToken(String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }

    public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

    public String getClaimFromToken(String token, String name) {
        final Claims claims = getAllClaimsFromToken(token);
        return claims.get(name, String.class);
    }

    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parser().verifyWith(key).build().parseSignedClaims(token).getPayload();
    }

    public Boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date(System.currentTimeMillis()));
    }

    public String generateToken(Admin admin) {
        return Jwts.builder().claim("role", "ADMIN").subject(admin.getEmail()).signWith(key).compact();
    }

    public String generateToken(Map<String, Object> claims, String subject) {
        return Jwts.builder().claims(claims).subject(subject).signWith(key).compact();
    }

    public Boolean isValidToken(String token) {
        try {
            Jwts.parser()
                    .verifyWith(key)
                    .build()
                    .parseSignedClaims(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
