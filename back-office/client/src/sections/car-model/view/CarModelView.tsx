import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useBrand from "../useCarModel";

const CarModelView = () => {
  const { carModels, brands, categories, loading } = useBrand();

  let brandOptions: [string, string][] = [["-1", "Choose"]];
  brands.map((brand) => brandOptions.push([brand.id.toString(), brand.name]));

  let categoryOptions: [string, string][] = [["-1", "Choose"]];
  categories.map((category) =>
    categoryOptions.push([category.id.toString(), category.name])
  );

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction(brandOptions, categoryOptions)}
          indexedRow
          title="Les modèles"
          columns={tableColumns}
          data={carModels}
        />
      )}
    </>
  );
};

export default CarModelView;
