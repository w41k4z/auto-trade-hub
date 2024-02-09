package proj.cloud.ath.repositories.mongo;

import org.springframework.data.mongodb.repository.MongoRepository;

import proj.cloud.ath.models.Users;

public interface UsersRepository extends MongoRepository<Users, String> {

    Users findByEmail(String email);
}
