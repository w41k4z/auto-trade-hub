import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import usePowertrainType from "../usePowertrainType";

const PowertrainTypeView = () => {
  const { powertrainTypes, loading, token } = usePowertrainType();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction(token)}
          indexedRow
          title="Les types d'energies"
          columns={tableColumns}
          data={powertrainTypes}
        />
      )}
    </>
  );
};

export default PowertrainTypeView;
