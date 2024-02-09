import { TableActionType } from "../../components/datatable/GenericTable";
import {
  addTransmissionType,
  updateTransmissionType,
  deleteTransmissionType,
} from "./logic";

export const tableAction = (token: string) => {
  const tableActionType: TableActionType = {
    addAction: {
      formTitle: "Ajouter un nouveau type de transmission",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Nom",
          options: {
            required:
              "Le nom d'un nouveau type de transmission est obligatoire",
          },
        },
      ],
      onSubmit: async (data) => {
        addTransmissionType(data, token);
      },
    },
    updateAction: (data) => {
      return {
        title: "Modifier le type de transmission",
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
        onSubmit: (data) => updateTransmissionType(data, token),
      };
    },
    deleteAction: (data) => deleteTransmissionType(data, token),
    hasFeature: {
      hasExportPdf: true,
    },
  };
  return tableActionType;
};
