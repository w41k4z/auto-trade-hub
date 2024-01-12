import { Helmet } from "react-helmet-async";
import { CarModelView } from "../sections/car-model/view";

const CarModel = () => {
  return (
    <>
      <Helmet>
        <title>Modèle</title>
      </Helmet>
      <CarModelView />
    </>
  );
};

export default CarModel;
