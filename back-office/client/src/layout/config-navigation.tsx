import { AiTwotoneDashboard } from "react-icons/ai";
import { TfiMoney } from "react-icons/tfi";
import { GrAnnounce } from "react-icons/gr";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { TbCategoryMinus } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";
import { SiBrandfolder } from "react-icons/si";
import { IoLogoModelS } from "react-icons/io";
import { GiModernCity } from "react-icons/gi";

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
    title: "Menu",
    elements: [
      {
        title: "Dashboard",
        path: "/app/dashboard",
        icon: <AiTwotoneDashboard />,
        onItemClick: () => {},
      },
    ],
  },
  {
    title: "Paramétrage",
    elements: [
      {
        title: "Commission",
        path: "/app/commission",
        icon: <TfiMoney />,
        onItemClick: () => {},
      },
    ],
  },
  {
    title: "Validation",
    elements: [
      {
        title: "Annonce",
        path: "/app/announcement",
        icon: <GrAnnounce />,
        onItemClick: () => {},
      },
    ],
  },
  {
    title: "Table",
    elements: [
      {
        title: "Energie",
        path: "/app/powertrain",
        icon: <MdOutlineEnergySavingsLeaf />,
        onItemClick: () => {},
      },
      {
        title: "Type de Transmission",
        path: "/app/transmission",
        icon: <TbCategoryMinus />,
        onItemClick: () => {},
      },
      {
        title: "Categorie",
        path: "/app/category",
        icon: <MdOutlineCategory />,
        onItemClick: () => {},
      },
      {
        title: "Marque",
        path: "/app/brand",
        icon: <SiBrandfolder />,
        onItemClick: () => {},
      },
      {
        title: "Modèle",
        path: "/app/car-model",
        icon: <IoLogoModelS />,
        onItemClick: () => {},
      },
      {
        title: "Province",
        path: "/app/province",
        icon: <GiModernCity />,
        onItemClick: () => {},
      },
    ],
  },
];
