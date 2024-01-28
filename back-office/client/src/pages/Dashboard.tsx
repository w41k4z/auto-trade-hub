import { Helmet } from "react-helmet-async";
import { DashboardView } from "../sections/dashboard/view";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <DashboardView />
    </>
  );
};

export default Dashboard;
