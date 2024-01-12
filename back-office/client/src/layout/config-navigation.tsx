import { RxActivityLog } from "react-icons/rx";

export type NavElement = {
  title: string;
  elements: {
    title: string;
    path: string;
    icon: React.ReactNode;
    onItemClick: () => void;
  }[];
};

export const navConfig: NavElement[] = [
  {
    title: "Table",
    elements: [
      {
        title: "Energie",
        path: "/powertrain",
        icon: <RxActivityLog />,
        onItemClick: () => {},
      },
      {
        title: "Type de Transmission",
        path: "/transmission",
        icon: <RxActivityLog />,
        onItemClick: () => {},
      },
      {
        title: "Categorie",
        path: "/category",
        icon: <RxActivityLog />,
        onItemClick: () => {},
      },
      {
        title: "Marque",
        path: "/brand",
        icon: <RxActivityLog />,
        onItemClick: () => {},
      },
    ],
  },
];
