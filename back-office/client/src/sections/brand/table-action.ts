import { TableActionType } from "../../components/datatable/GenericTable";
import {
  addBrand,
  updateBrand,
  deleteBrand,
} from "./logic";

export const tableAction = () => {
  const tableActionType: TableActionType = {
    addAction: {
      formTitle: "Ajouter une nouvelle marque",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Nom",
          options: {
            required:
              "Le nom d'un nouvelle marque est obligatoire",
          },
        },
      ],
      onSubmit: async (data) => {
        addBrand(data);
      },
    },
    updateAction: (data) => {
      return {
        title: "Modifier la marque",
        fields: [
          {
            name: "id",
            type: "hidden",
            defaultValue: data.id,
            hidden: true,
          },
          {
            name: "name",
            type: "text",
            label: "Nom",
            defaultValue: data.name,
          },
        ],
        onSubmit: updateBrand,
      };
    },
    deleteAction: deleteBrand,
    hasFeature: {
      hasExportPdf: true,
    },
  };
  return tableActionType;
};
