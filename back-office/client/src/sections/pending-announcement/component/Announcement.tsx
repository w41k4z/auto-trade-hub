import Carousel from "react-bootstrap/Carousel";
import { Announcement as AnnouncementType } from "../type";
import { formatNumberToCurrency } from "../../../helpers/NumberHelper";

type AnnouncementProps = {
  announcement: AnnouncementType;
};

const Announcement = ({ announcement }: AnnouncementProps) => {
  return (
    <article className="row">
      <header className="col-12 d-flex justify-content-between align-items-center mb-4">
        <h2>
          `${announcement.carModel.category.name} $
          {announcement.carModel.brand.name} ${announcement.carModel.name} $
          {announcement.years}`
        </h2>
        <button className="btn btn-dark rounded">
          {formatNumberToCurrency(announcement.price)} Ar
        </button>
      </header>
      <section className="col-md-8">
        <Carousel>
          {announcement.announcement_picture.length === 0 && (
            <img
              src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
              alt="..."
            />
          )}
          {announcement.announcement_picture.map((picture) => (
            <Carousel.Item>
              <img src={picture.path} width={750} height={325} alt="..." />
            </Carousel.Item>
          ))}
        </Carousel>
        <h4 className="mt-4">Description: </h4>
        <p>{announcement.description}</p>
        <span className="mt-2">
          <b>Contact:</b> {announcement.phone_number}
        </span>
      </section>
      <section className="col-md-4">
        <table className="table table-dark">
          <tbody>
            <tr>
              <td>Catégorie</td>
              <td>{announcement.carModel.category.name}</td>
            </tr>
            <tr>
              <td>Marque</td>
              <td>{announcement.carModel.brand.name}</td>
            </tr>
            <tr>
              <td>Modèle</td>
              <td>{announcement.carModel.name}</td>
            </tr>
            <tr>
              <td>Carburant</td>
              <td>{announcement.powertrain_type.name}</td>
            </tr>
            <tr>
              <td>Boites de vitesse</td>
              <td>{announcement.transmission_type.name}</td>
            </tr>
            <tr>
              <td>Année</td>
              <td>{announcement.years}</td>
            </tr>
            <tr>
              <td>Kilometre</td>
              <td>{announcement.mileage}</td>
            </tr>
          </tbody>
        </table>
        <h3>{`${announcement.users.firstName} ${announcement.users.name}`}</h3>
      </section>
    </article>
  );
};

export default Announcement;
