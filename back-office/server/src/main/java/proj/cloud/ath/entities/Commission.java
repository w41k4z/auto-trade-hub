package proj.cloud.ath.entities;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Commission")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Commission {

    // @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
// @GeneratedValue(strategy = GenerationType.SEQUENCE)
private Long id;
    // private Long id;

    @Column(name = "from_date")
    private Timestamp fromDate;

    private Double percentage;
}
