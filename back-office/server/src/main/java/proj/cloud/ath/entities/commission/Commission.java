package proj.cloud.ath.entities.commission;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import proj.cloud.ath.entities.CarModel;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "commission")
public class Commission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "car_model_id", referencedColumnName = "id")
    private CarModel carModel;

    @Column(name = "from_date")
    private Timestamp fromDate;

    private Double percentage;
}
