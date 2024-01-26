import { Helmet } from "react-helmet-async";
import { CommissionView } from "../sections/commission/view";

const Commission = () => {
  return (
    <>
      <Helmet>
        <title>Commissions</title>
      </Helmet>
      <CommissionView />
    </>
  );
};

export default Commission;
