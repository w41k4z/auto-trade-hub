package proj.cloud.ath.entities;

import org.hibernate.annotations.Immutable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "latest_commission")
@Immutable
public class VCommission extends AbstractCommission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Commission toCommission() {
        Commission commission = new Commission();
        commission.setId(this.getId());
        commission.setFromDate(this.getFromDate());
        commission.setPercentage(this.getPercentage());
        return commission;
    }
}
