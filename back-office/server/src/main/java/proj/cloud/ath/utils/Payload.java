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

    // /**
    // * @return String return the description
    // */
    // public String getDescription() {
    // return description;
    // }

    // /**
    // * @param description the description to set
    // */
    // public void setDescription(String description) {
    // this.description = description;
    // }

    // /**
    // * @return Integer return the years
    // */
    // public Integer getYears() {
    // return years;
    // }

    // /**
    // * @return Integer return the status
    // */
    // public Integer getStatus() {
    // return status;
    // }

    // /**
    // * @param car_model_id the car_model_id to set
    // */
    // public void setCar_model_id(Long car_model_id) {
    // this.car_model_id = car_model_id;
    // }

    // /**
    // * @return Long return the powertrain_type_id
    // */
    // public Long getPowertrain_type_id() {
    // return powertrain_type_id;
    // }

    // /**
    // * @param powertrain_type_id the powertrain_type_id to set
    // */
    // public void setPowertrain_type_id(Long powertrain_type_id) {
    // this.powertrain_type_id = powertrain_type_id;
    // }

    // /**
    // * @return Long return the transmission_type_id
    // */
    // public Long getTransmission_type_id() {
    // return transmission_type_id;
    // }

    // /**
    // * @param transmission_type_id the transmission_type_id to set
    // */
    // public void setTransmission_type_id(Long transmission_type_id) {
    // this.transmission_type_id = transmission_type_id;
    // }

    // /**
    // * @return Long return the commission_id
    // */
    // public Long getCommission_id() {
    // return commission_id;
    // }

    // /**
    // * @param commission_id the commission_id to set
    // */
    // public void setCommission_id(Long commission_id) {
    // this.commission_id = commission_id;
    // }

    // /**
    // * @return Long return the users_id
    // */
    // public Long getUsers_id() {
    // return users_id;
    // }

    // /**
    // * @param users_id the users_id to set
    // */
    // public void setUsers_id(Long users_id) {
    // this.users_id = users_id;
    // }

}
