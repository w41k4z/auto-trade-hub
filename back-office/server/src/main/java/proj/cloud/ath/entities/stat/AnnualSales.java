package proj.cloud.ath.entities.stat;

import org.springframework.data.annotation.Immutable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "annual_sales")
@Immutable
public class AnnualSales {

    @Id
    private Integer year;

    @Column(name = "total_sales")
    private Double totalSales;

    @Column(name = "total_commissions")
    private Double totalCommissions;

}
