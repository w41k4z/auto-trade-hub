import { Helmet } from "react-helmet-async";
import { PowertrainTypeView } from "../sections/powertrain-type/view";

const PowertrainType = () => {
  return (
    <>
      <Helmet>
        <title>Type d'energie</title>
      </Helmet>
      <PowertrainTypeView />
    </>
  );
};

export default PowertrainType;
