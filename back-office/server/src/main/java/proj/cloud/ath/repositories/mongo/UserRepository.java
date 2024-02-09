package proj.cloud.ath.repositories.mongo;

import org.springframework.data.mongodb.repository.MongoRepository;

import proj.cloud.ath.models.User;

public interface UserRepository extends MongoRepository<User, String> {

    User findByEmail(String email);
}
