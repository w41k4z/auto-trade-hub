package proj.cloud.ath.controllers.api.v1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import proj.cloud.ath.models.Message;
import proj.cloud.ath.services.mongo.MessageService;

@Controller
public class ChatController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
    private MessageService messageService;

    @MessageMapping("/message")
    public void dispatchMessage(Message message) {
        simpMessagingTemplate.convertAndSend("/private/queue/user/" + message
                .getReceiver(),
                message);
        messageService.newMessage(message);
    }
}
