import Carousel from "react-bootstrap/Carousel";

const Announcement = () => {
  return (
    <article className="row">
      <header className="col-12 d-flex justify-content-between align-items-center mb-4">
        <h2>Acura RDX 2007</h2>
        <button className="btn btn-dark rounded">30 000 000 Ar</button>
      </header>
      <section className="col-md-8">
        <Carousel>
          <Carousel.Item>
            <img
              src="https://milavam.com/wp-content/uploads/2023/08/IMG-20230802-WA0002.jpg"
              // style={{ height: "100%", width: "100%" }}
              // className="img-fluid"
              width={750}
              height={325}
              alt="..."
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://milavam.com/wp-content/uploads/2023/08/IMG-20230802-WA0000.jpg"
              width={750}
              height={325}
              alt="..."
            />
          </Carousel.Item>
        </Carousel>
        <h4 className="mt-4">Description: </h4>
        <p>Appelez directement pour ceux qui sont intéressés.</p>
        <span className="mt-2">
          <b>Contact:</b> 0331145021
        </span>
      </section>
      <section className="col-md-4">
        <table className="table table-dark">
          <tbody>
            <tr>
              <td>Catégorie</td>
              <td>Pick-up</td>
            </tr>
            <tr>
              <td>Marque</td>
              <td>Mitsubishi</td>
            </tr>
            <tr>
              <td>Modele</td>
              <td>L200</td>
            </tr>
            <tr>
              <td>Carburant</td>
              <td>Essence</td>
            </tr>
            <tr>
              <td>Boites de vitesse</td>
              <td>Automatique</td>
            </tr>
            <tr>
              <td>Année</td>
              <td>2009</td>
            </tr>
            <tr>
              <td>Kilometre</td>
              <td>5489</td>
            </tr>
          </tbody>
        </table>
        <h3>Mamy Niaina Cypre Randremaharison</h3>
      </section>
    </article>
  );
};

export default Announcement;
