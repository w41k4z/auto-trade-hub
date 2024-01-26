import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useCategory from "../useCommission";

const CommissionView = () => {
  const { categories, loading } = useCategory();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction()}
          indexedRow
          title="Les categories"
          columns={tableColumns}
          data={categories}
        />
      )}
    </>
  );
};

export default CommissionView;
