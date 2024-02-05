package proj.cloud.ath.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Message {

    private String sender;
    private String receiver;
    private String content;
    private String timestamp;
}
