import { Helmet } from "react-helmet-async";
import { ProvinceView } from "../sections/province/view";

const PowertrainType = () => {
  return (
    <>
      <Helmet>
        <title>Provinces</title>
      </Helmet>
      <ProvinceView />
    </>
  );
};

export default PowertrainType;
