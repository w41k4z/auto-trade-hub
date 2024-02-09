package proj.cloud.ath.services.mongo;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import proj.cloud.ath.models.Message;
import proj.cloud.ath.repositories.mongo.MessageRepository;

@Service
public class MessageService {

    private MessageRepository repository;

    public void newMessage(Message message) {
        repository.save(message);
    }

    public List<Message> getAllConversations(String user1, String user2) {
        return repository.getAllConversations(user1, user2, Sort.by(Sort.Direction.DESC, "timestamp"));
    }

    public Message getLatestMessage(String user1, String user2) {
        List<Message> messages = this.getAllConversations(user1, user2);
        return messages.isEmpty() ? null : messages.get(0);
    }
}
