package proj.cloud.ath.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.sql.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Announcement")
public class Announcement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double mileage;
    private Double price;
    private Date announcement_date;
    private String description;
    private Integer years;
    private String phone_number;
    private Integer status;

    @OneToOne
    @JoinColumn(name = "car_model_id", referencedColumnName = "id")
    private CarModel car_model;

    @OneToOne
    @JoinColumn(name = "powertrain_type_id", referencedColumnName = "id")
    private PowertrainType powertrain_type;

    @OneToOne
    @JoinColumn(name = "transmission_type_id", referencedColumnName = "id")
    private TransmissionType transmission_type;

    private Double commission;

    @OneToOne
    @JoinColumn(name = "users_id", referencedColumnName = "id")
    private User users;

    @OneToMany(mappedBy = "announcement")
    private List<Announcement_picture> announcement_picture;

}
