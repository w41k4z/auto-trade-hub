package proj.cloud.ath.entities;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Admin {

    private Long id;
    private String name;
    private String firstName;
    private Date birthDate;
    private String email;
    private String password;
    private String phoneNumber;
    private Integer genre;

}
