import { MdAttachMoney } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdOutlinePending } from "react-icons/md";
import { LiaUsersSolid } from "react-icons/lia";
import Activity from "../Activity";
import useGlobalStat from "./useGlobalStat";
import { formatNumberToCurrency } from "../../../../helpers/NumberHelper";

const GlobalStat = ({ token }: { token: string }) => {
  const { globalStat, loading } = useGlobalStat(token);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <section className="col-xl-3 col-md-6">
            <Activity
              title="Totales commissions"
              content={`AR ${formatNumberToCurrency(
                globalStat?.totalCommissions ? globalStat?.totalCommissions : 0
              )}`}
              icon={<MdAttachMoney />}
              textColor="text-c-yellow"
              bgColor="bg-c-yellow"
            />
          </section>
          <section className="col-xl-3 col-md-6">
            <Activity
              title="Totales des ventes"
              content={`${formatNumberToCurrency(
                globalStat?.totalSales ? globalStat?.totalSales : 0
              )}+`}
              icon={<FaMoneyBillTransfer />}
              textColor="text-c-green"
              bgColor="bg-c-green"
            />
          </section>
          <section className="col-xl-3 col-md-6">
            <Activity
              title="Annonce en attente"
              content={
                globalStat?.pendingAnnouncementCount
                  ? globalStat?.pendingAnnouncementCount.toString()
                  : "0"
              }
              icon={<MdOutlinePending />}
              textColor="text-c-pink"
              bgColor="bg-c-pink"
            />
          </section>
          <section className="col-xl-3 col-md-6 mb-5">
            <Activity
              title="Nombre d'utilisateurs"
              content={
                globalStat?.usersCount ? globalStat?.usersCount.toString() : "0"
              }
              icon={<LiaUsersSolid />}
              textColor="text-c-blue"
              bgColor="bg-c-blue"
            />
          </section>
        </>
      )}
    </>
  );
};

export default GlobalStat;
