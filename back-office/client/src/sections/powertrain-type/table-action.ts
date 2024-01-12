import { TableActionType } from "../../components/datatable/GenericTable";
import {
  addPowertrainType,
  updatePowertrainType,
  deletePowertrainType,
} from "./logic";

export const tableAction = () => {
  const tableActionType: TableActionType = {
    addAction: {
      formTitle: "Ajouter un nouveau type d'energie",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Nom",
          options: {
            required:
              "Le nom d'un nouveau type d'energie est obligatoire",
          },
        },
      ],
      onSubmit: async (data) => {
        addPowertrainType(data);
      },
    },
    updateAction: (data) => {
      return {
        title: "Modifier le type d'energie",
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
        onSubmit: updatePowertrainType,
      };
    },
    deleteAction: deletePowertrainType,
    hasFeature: {
      hasExportPdf: true,
    },
  };
  return tableActionType;
};
