package proj.cloud.ath.entities.commission;

import java.sql.Timestamp;

import org.hibernate.annotations.Immutable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import proj.cloud.ath.entities.CarModel;

@Data
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "latest_commission")
@Immutable
public class CommissionView {

    @Id
    private Long id;

    @OneToOne
    @JoinColumn(name = "car_model_id", referencedColumnName = "id")
    private CarModel carModel;

    @Column(name = "from_date")
    private Timestamp fromDate;

    private Double percentage;

    public Commission toCommission() {
        Commission commission = new Commission();
        commission.setId(this.getId());
        commission.setFromDate(this.getFromDate());
        commission.setCarModel(this.getCarModel());
        commission.setPercentage(this.getPercentage());
        return commission;
    }
}