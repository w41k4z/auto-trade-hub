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
        path: "/app/powertrain",
        icon: <RxActivityLog />,
        onItemClick: () => {},
      },
      {
        title: "Type de Transmission",
        path: "/app/transmission",
        icon: <RxActivityLog />,
        onItemClick: () => {},
      },
      {
        title: "Categorie",
        path: "/app/category",
        icon: <RxActivityLog />,
        onItemClick: () => {},
      },
      {
        title: "Marque",
        path: "/app/brand",
        icon: <RxActivityLog />,
        onItemClick: () => {},
      },
      {
        title: "Modèle",
        path: "/app/car-model",
        icon: <RxActivityLog />,
        onItemClick: () => {},
      },
    ],
  },
];
