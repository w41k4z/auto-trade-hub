import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useTransmissionType from "../useTransmissionType";

const TransmissionTypeView = () => {
  const { transmissionTypes, loading } = useTransmissionType();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction()}
          indexedRow
          title="Les activités"
          columns={tableColumns}
          data={transmissionTypes}
        />
      )}
    </>
  );
};

export default TransmissionTypeView;
