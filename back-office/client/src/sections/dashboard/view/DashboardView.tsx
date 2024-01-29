import "../dashboard.css";
import Sales from "../component/sales/Sales";
import Ranking from "../component/ranking/Ranking";
import GlobalStat from "../component/global/GlobalStat";
import useDashboard from "../useDashboard";

const DashboardView = () => {
  const { token } = useDashboard();

  return (
    <div className="row">
      <GlobalStat token={token} />
      <Sales token={token} />
      <hr className="my-5" />
      <Ranking token={token} />
    </div>
  );
};

export default DashboardView;
