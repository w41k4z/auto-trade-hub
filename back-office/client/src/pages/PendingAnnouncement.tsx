import { Helmet } from "react-helmet-async";
import { PendingAnnouncementView } from "../sections/pending-announcement/view";

const Category = () => {
  return (
    <>
      <Helmet>
        <title>Annonces en attente</title>
      </Helmet>
      <PendingAnnouncementView />
    </>
  );
};

export default Category;
