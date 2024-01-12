import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useBrand from "../useBrand";

const BrandView = () => {
  const { brands, loading } = useBrand();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction()}
          indexedRow
          title="Les marques"
          columns={tableColumns}
          data={brands}
        />
      )}
    </>
  );
};

export default BrandView;
