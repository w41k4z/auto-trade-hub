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
        title: "Type de transmission",
        path: "/transmission",
        icon: <RxActivityLog />,
        onItemClick: () => {},
      },
    ],
  },
];
