import { Column } from "../../components/datatable/column";

export const tableColumns: Column[] = [
  {
    name: "Marque",
    propTarget: "carModelBrand",
    format: "default",
  },
  {
    name: "Catégorie",
    propTarget: "carModelCategory",
    format: "default",
  },
  {
    name: "Modèle",
    propTarget: "carModelName",
    format: "default",
  },
  {
    name: "Commission",
    propTarget: "percentage",
    format: "number",
  },
];
