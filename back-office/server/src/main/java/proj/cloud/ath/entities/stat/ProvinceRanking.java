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
@Table(name = "province_ranking")
@Immutable
public class ProvinceRanking {

    @Id
    @Column(name = "province_id")
    private Long provinceId;

    @Column(name = "province_name")
    private String provinceName;

    @Column(name = "sold_announcement_count")
    private Integer soldCount;

    @Column(name = "total_sales")
    private Double totalSales;

    @Column(name = "total_commissions")
    private Double totalCommissions;

    private Integer month;

    private Integer year;
}
