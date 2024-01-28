import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useProvince from "../useProvince";

const ProvinceView = () => {
  const { token, provinces, loading } = useProvince();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction(token)}
          indexedRow
          title="Les provinces"
          columns={tableColumns}
          data={provinces}
        />
      )}
    </>
  );
};

export default ProvinceView;
