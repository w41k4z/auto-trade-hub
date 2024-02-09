package proj.cloud.ath.repositories.mongo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.domain.Sort;

import proj.cloud.ath.models.Message;

public interface MessageRepository extends MongoRepository<Message, String> {

    @Query("{'$or': [{'sender': ?0, 'receiver': ?1}, {'sender': ?1, 'receiver': ?0}]}")
    List<Message> getAllConversations(String user1, String user2, Sort sort);
}
