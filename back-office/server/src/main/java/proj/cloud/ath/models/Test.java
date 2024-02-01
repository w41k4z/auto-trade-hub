package proj.cloud.ath.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "test")
public class Test {

    @Id
    private String id;

    private String test;
}
