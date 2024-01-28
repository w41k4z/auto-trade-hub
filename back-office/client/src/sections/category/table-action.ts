import { TableActionType } from "../../components/datatable/GenericTable";
import { addCategory, updateCategory, deleteCategory } from "./logic";

export const tableAction = (token: string) => {
  const tableActionType: TableActionType = {
    addAction: {
      formTitle: "Ajouter une nouvelle categorie",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Nom",
          options: {
            required: "Le nom d'une nouvelle categorie est obligatoire",
          },
        },
      ],
      onSubmit: async (data) => {
        addCategory(data, token);
      },
    },
    updateAction: (data) => {
      return {
        title: "Modifier la categorie",
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
        onSubmit: (data) => updateCategory(data, token),
      };
    },
    deleteAction: (data) => deleteCategory(data, token),
    hasFeature: {
      hasExportPdf: true,
    },
  };
  return tableActionType;
};
