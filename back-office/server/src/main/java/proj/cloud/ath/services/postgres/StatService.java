package proj.cloud.ath.services.postgres;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import proj.cloud.ath.entities.stat.AnnualSales;
import proj.cloud.ath.entities.stat.BrandRanking;
import proj.cloud.ath.entities.stat.GlobalStat;
import proj.cloud.ath.entities.stat.MonthlySales;
import proj.cloud.ath.entities.stat.ProvinceRanking;
import proj.cloud.ath.repositories.postgres.AnnualSalesRepository;
import proj.cloud.ath.repositories.postgres.BrandRankingRepository;
import proj.cloud.ath.repositories.postgres.GlobalStatRepository;
import proj.cloud.ath.repositories.postgres.MonthlySalesRepository;
import proj.cloud.ath.repositories.postgres.ProvinceRankingRepository;

@Service
public class StatService {

    @Autowired
    private AnnualSalesRepository annualSalesRepository;

    @Autowired
    private MonthlySalesRepository monthlySalesRepository;

    @Autowired
    private BrandRankingRepository brandRankingRepository;

    @Autowired
    private ProvinceRankingRepository provinceRankingRepository;

    @Autowired
    private GlobalStatRepository globalStatRepository;

    public GlobalStat getGlobalStat() {
        return globalStatRepository.findAll().get(0);
    }

    public List<AnnualSales> getAnnualSales() {
        return annualSalesRepository.findAll();
    }

    public List<MonthlySales> getMonthlySales() {
        return monthlySalesRepository.findAll();
    }

    public List<BrandRanking> getBrandRanking(Integer month, Integer year) {
        BrandRanking brandRanking = new BrandRanking();
        brandRanking.setMonth(month);
        brandRanking.setYear(year);
        return brandRankingRepository.findAll(Example.of(brandRanking));
    }

    public List<ProvinceRanking> getProvinceRanking(Integer month, Integer year) {
        ProvinceRanking provinceRanking = new ProvinceRanking();
        provinceRanking.setMonth(month);
        provinceRanking.setYear(year);
        return provinceRankingRepository.findAll(Example.of(provinceRanking));
    }
}