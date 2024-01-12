import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useCategory from "../useCategory";

const CategoryView = () => {
  const { categories, loading } = useCategory();

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
          data={categories}
        />
      )}
    </>
  );
};

export default CategoryView;
