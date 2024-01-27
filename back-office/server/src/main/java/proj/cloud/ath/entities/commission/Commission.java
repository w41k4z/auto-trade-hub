package proj.cloud.ath.entities.commission;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
<<<<<<< HEAD:back-office/server/src/main/java/proj/cloud/ath/entities/commission/Commission.java
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
=======
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
>>>>>>> Last_version:back-office/server/src/main/java/proj/cloud/ath/entities/Commission.java
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
<<<<<<< HEAD:back-office/server/src/main/java/proj/cloud/ath/entities/commission/Commission.java
import proj.cloud.ath.entities.CarModel;
=======
>>>>>>> Last_version:back-office/server/src/main/java/proj/cloud/ath/entities/Commission.java

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
<<<<<<< HEAD:back-office/server/src/main/java/proj/cloud/ath/entities/commission/Commission.java
@Table(name = "commission")
=======
@Table(name = "Commission")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
>>>>>>> Last_version:back-office/server/src/main/java/proj/cloud/ath/entities/Commission.java
public class Commission {

    // @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
<<<<<<< HEAD:back-office/server/src/main/java/proj/cloud/ath/entities/commission/Commission.java
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "car_model_id", referencedColumnName = "id")
    private CarModel carModel;
=======
// @GeneratedValue(strategy = GenerationType.SEQUENCE)
private Long id;
    // private Long id;
>>>>>>> Last_version:back-office/server/src/main/java/proj/cloud/ath/entities/Commission.java

    @Column(name = "from_date")
    private Timestamp fromDate;

    private Double percentage;
}
