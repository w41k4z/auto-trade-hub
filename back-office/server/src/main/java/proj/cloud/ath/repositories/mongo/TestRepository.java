package proj.cloud.ath.repositories.mongo;

import org.springframework.data.mongodb.repository.MongoRepository;

import proj.cloud.ath.models.Test;

public interface TestRepository extends MongoRepository<Test, String> {

}
