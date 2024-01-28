import { TableActionType } from "../../components/datatable/GenericTable";
import { addCarModel, deleteCarModel } from "./logic";

export const tableAction = (
  brandOptions: [string, string][],
  categoryOptions: [string, string][],
  token: string
) => {
  const tableActionType: TableActionType = {
    addAction: {
      formTitle: "Ajouter un nouveau modèle",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Nom",
          options: {
            required: "Le nom d'un nouveau modèle est obligatoire",
          },
        },
        {
          name: "brandId",
          type: "select",
          label: "Marque",
          selectValues: brandOptions,
        },
        {
          name: "categoryId",
          type: "select",
          label: "Catégorie",
          selectValues: categoryOptions,
        },
      ],
      onSubmit: async (data) => {
        addCarModel(data, token);
      },
    },
    deleteAction: (data) => deleteCarModel(data, token),
    hasFeature: {
      hasExportPdf: true,
    },
  };
  return tableActionType;
};
