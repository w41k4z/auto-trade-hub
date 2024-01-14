import { TableActionType } from "../../components/datatable/GenericTable";
import { addBrand, updateBrand, deleteBrand } from "./logic";

export const tableAction = (token: string) => {
  const tableActionType: TableActionType = {
    addAction: {
      formTitle: "Ajouter une nouvelle marque",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Nom",
          options: {
            required: "Le nom d'un nouvelle marque est obligatoire",
          },
        },
      ],
      onSubmit: async (data) => {
        addBrand(data, token);
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
        onSubmit: (data) => updateBrand(data, token),
      };
    },
    deleteAction: (data) => deleteBrand(data, token),
    hasFeature: {
      hasExportPdf: true,
    },
  };
  return tableActionType;
};
