package proj.cloud.ath.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocket implements WebSocketMessageBrokerConfigurer {

    @Value("${cors.allowed.origin.pattern}")
    private String allowedOriginPattern;

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/private/queue/user");
        config.setApplicationDestinationPrefixes("/chat-app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/public").setAllowedOriginPatterns(allowedOriginPattern).withSockJS();
        registry.addEndpoint("/secured/room").setAllowedOriginPatterns(allowedOriginPattern).withSockJS();
    }
}
