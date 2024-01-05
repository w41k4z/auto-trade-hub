import { TableActionType } from "../../components/datatable/GenericTable";
import { addPowertrainType } from "./logic";

export const tableAction = () => {
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
        addPowertrainType(data);
      },
    },
    hasFeature: {
      hasExportPdf: true,
    },
  };
  return tableActionType;
};
