package proj.cloud.ath.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import proj.cloud.ath.entities.Province;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    private Long _id;
    private Long id;
    private String name;
    private String firstName;
    private Date birthDate;
    private String email;
    private String password;
    private String phoneNumber;
    private Integer genre;
    private Province province;
}
