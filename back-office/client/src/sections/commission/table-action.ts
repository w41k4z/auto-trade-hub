import { TableActionType } from "../../components/datatable/GenericTable";

export const tableAction = () => {
  const tableActionType: TableActionType = {
    hasFeature: {
      hasExportPdf: true,
    },
  };
  return tableActionType;
};
