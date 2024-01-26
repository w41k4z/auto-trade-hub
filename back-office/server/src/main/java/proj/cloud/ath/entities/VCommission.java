package proj.cloud.ath.entities;

import org.hibernate.annotations.Immutable;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "latest_commission")
@Immutable
public class VCommission extends Commission {

}
