import { TableActionType } from "../../components/datatable/GenericTable";
import { addProvince, updateProvince, deleteProvince } from "./logic";

export const tableAction = (token: string) => {
  const tableActionType: TableActionType = {
    addAction: {
      formTitle: "Ajouter un nouveau province",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Nom",
          options: {
            required: "Le nom d'un nouveau province est obligatoire",
          },
        },
      ],
      onSubmit: async (data) => {
        addProvince(data, token);
      },
    },
    updateAction: (data) => {
      return {
        title: "Modifier le province",
        fields: [
          {
            name: "id",
            type: "number",
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
        onSubmit: (data) => updateProvince(data, token),
      };
    },
    deleteAction: (data) => deleteProvince(data, token),
    hasFeature: {
      hasExportPdf: true,
    },
  };
  return tableActionType;
};
