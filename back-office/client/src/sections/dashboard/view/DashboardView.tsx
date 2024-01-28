import Activity from "../component/Activity";
import { MdAttachMoney } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { GoDownload } from "react-icons/go";

import "../dashboard.css";
import Sales from "../component/sales/Sales";
import Ranking from "../component/ranking/Ranking";

const DashboardView = () => {
  return (
    <div className="row">
      <section className="col-xl-3 col-md-6">
        <Activity
          title="All Earnings"
          content="$30200"
          icon={<MdAttachMoney />}
          textColor="text-c-yellow"
          bgColor="bg-c-yellow"
        />
      </section>
      <section className="col-xl-3 col-md-6">
        <Activity
          title="Page Views"
          content="290+"
          icon={<FaRegFileAlt />}
          textColor="text-c-green"
          bgColor="bg-c-green"
        />
      </section>
      <section className="col-xl-3 col-md-6">
        <Activity
          title="Task Completed"
          content="145"
          icon={<CiCalendar />}
          textColor="text-c-pink"
          bgColor="bg-c-pink"
        />
      </section>
      <section className="col-xl-3 col-md-6 mb-5">
        <Activity
          title="Downloads"
          content="500"
          icon={<GoDownload />}
          textColor="text-c-blue"
          bgColor="bg-c-blue"
        />
      </section>
      <Sales />
      <hr className="my-5" />
      <Ranking />
    </div>
  );
};

export default DashboardView;
