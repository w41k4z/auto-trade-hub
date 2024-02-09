package proj.cloud.ath.controllers.api.v1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.cloud.ath.dto.Conversation;
import proj.cloud.ath.response.RestApiResponse;
import proj.cloud.ath.services.mongo.MessageService;
import proj.cloud.ath.utils.JwtUtil;

@RestController
@RequestMapping("/api/v1/conversations")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping
    private RestApiResponse getAllConversations(@RequestHeader(value = "Authorization") String bearerToken,
            Conversation conversation) {
        String token = bearerToken.substring(7);
        RestApiResponse response = new RestApiResponse();
        if (jwtUtil.isValidToken(token) && jwtUtil.isTokenForUser(token, conversation.getUser1())) {
            response = new RestApiResponse(
                    messageService.getAllConversations(conversation.getUser1(), conversation.getUser2()), 200);
        } else {
            response.setMessage("Invalid token");
            response.setStatus(403);
        }
        return response;
    }

    @PostMapping("/latest")
    private RestApiResponse getLatestMessage(@RequestHeader(value = "Authorization") String bearerToken,
            Conversation conversation) {
        String token = bearerToken.substring(7);
        RestApiResponse response = new RestApiResponse();
        if (jwtUtil.isValidToken(token) && jwtUtil.isTokenForUser(token, conversation.getUser1())) {
            response = new RestApiResponse(
                    messageService.getLatestMessage(conversation.getUser1(), conversation.getUser2()), 200);
        } else {
            response.setMessage("Invalid token");
            response.setStatus(403);
        }
        return response;
    }
}
