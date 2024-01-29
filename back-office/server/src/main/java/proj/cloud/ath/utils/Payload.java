package proj.cloud.ath.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import proj.cloud.ath.entities.Announcement;
import proj.cloud.ath.entities.CarModel;
import proj.cloud.ath.entities.PowertrainType;
import proj.cloud.ath.entities.Province;
import proj.cloud.ath.entities.TransmissionType;
import proj.cloud.ath.entities.User;
import proj.cloud.ath.services.CommissionService;

@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Payload {

    private Double mileage;
    private Double price;
    private Integer years;
    private String phone_number;
    private Integer status;
    private Long car_model_id;
    private Long powertrain_type_id;
    private Long transmission_type_id;
    private Long users_id;
    private Long province_id;

    public Announcement getAnnouncement(CommissionService commissionService) {
        Announcement announcement = new Announcement();
        announcement.setMileage(this.mileage);
        announcement.setPhone_number(this.phone_number);
        announcement.setPrice(this.price);
        announcement.setStatus(this.status);
        announcement.setYears(this.years);
        CarModel carModel = new CarModel();
        carModel.setId(this.car_model_id);
        announcement.setCar_model(carModel);
        Double com = commissionService.getCommissionByCarModelId(car_model_id).getPercentage();
        PowertrainType powertrainType = new PowertrainType();
        powertrainType.setId(this.powertrain_type_id);
        announcement.setPowertrain_type(powertrainType);
        TransmissionType transmissionType = new TransmissionType();
        transmissionType.setId(this.transmission_type_id);
        announcement.setTransmission_type(transmissionType);
        announcement.setCommission(com);
        User user = new User();
        user.setId(this.users_id);
        announcement.setUsers(user);
        Province province = new Province();
        province.setId(this.province_id);
        announcement.setProvince(province);
        return announcement;
    }

}
