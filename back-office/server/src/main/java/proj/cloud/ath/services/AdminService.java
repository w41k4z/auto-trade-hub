package proj.cloud.ath.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import proj.cloud.ath.entities.Admin;
import proj.cloud.ath.repositories.AdminRepository;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public Admin authenticate(String email, String password) {
        Optional<Admin> admin = this.findByEmail(email);
        if (admin.isPresent()) {
            if (BCrypt.checkpw(password, admin.get().getPassword())) {
                return admin.get();
            }
        }
        throw new IllegalArgumentException("Wrong credentials");
    }

    public Optional<Admin> findByEmail(String email) {
        return adminRepository.findByEmail(email);
    }
}
