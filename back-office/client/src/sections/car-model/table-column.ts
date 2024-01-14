import { Column } from "../../components/datatable/column";

export const tableColumns: Column[] = [
  {
    name: "Nom",
    propTarget: "name",
    format: "default",
  },
  {
    name: "Marque",
    propTarget: "brandName",
    format: "default",
  },
  {
    name: "Catégorie",
    propTarget: "categoryName",
    format: "default",
  },
];
