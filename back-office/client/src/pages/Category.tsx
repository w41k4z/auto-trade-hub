import { Helmet } from "react-helmet-async";
import { CategoryView } from "../sections/category/view";

const Category = () => {
    return (
        <>
            <Helmet>
                <title>Categorie</title>
            </Helmet>
            <CategoryView />
        </>
    );
};

export default Category;