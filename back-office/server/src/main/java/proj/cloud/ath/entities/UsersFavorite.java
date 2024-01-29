package proj.cloud.ath.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToOne;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class UsersFavorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "birth_date")
    private Date birthDate;

    private String email;

    private String password;

    @Column(name = "phone_number")
    private String phoneNumber;

    private Integer genre;

    @OneToOne
    @JoinColumn(name = "province_id", referencedColumnName = "id")
    private Province province;


    @ManyToMany
    @JoinTable(name = "favorite",joinColumns = @JoinColumn(name = "users_id"),inverseJoinColumns = @JoinColumn(name = "announcement_id"))
    List<Announcement> announcementFavorite;

    @OneToMany
    @JoinColumn(name = "users_id")
    List<Announcement> announcement;

}
