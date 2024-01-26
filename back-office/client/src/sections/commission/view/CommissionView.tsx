import GenericTable from "../../../components/datatable/GenericTable";
import Commission from "../component/Commission";
import GlobalCommission from "../component/GlobalCommission";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useCommission from "../useCommission";

const CommissionView = () => {
  const { commissions, loading } = useCommission();

  return (
    <div className="row">
      <Commission className="col-md-6 px-3" />
      <GlobalCommission className="col-md-6 px-3" />
      <hr className="my-5" />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction()}
          indexedRow
          title="Les commissions"
          columns={tableColumns}
          data={commissions}
        />
      )}
    </div>
  );
};

export default CommissionView;
