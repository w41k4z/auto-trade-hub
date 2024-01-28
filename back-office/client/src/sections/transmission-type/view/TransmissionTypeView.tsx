import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useTransmissionType from "../useTransmissionType";

const TransmissionTypeView = () => {
  const { transmissionTypes, loading, token } = useTransmissionType();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction(token)}
          indexedRow
          title="Les types de transmissions"
          columns={tableColumns}
          data={transmissionTypes}
        />
      )}
    </>
  );
};

export default TransmissionTypeView;
