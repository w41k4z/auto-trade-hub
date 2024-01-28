import { Helmet } from "react-helmet-async";
import { BrandView } from "../sections/brand/view";

const Brand = () => {
    return (
        <>
            <Helmet>
                <title>Marque</title>
            </Helmet>
            <BrandView />
        </>
    );
};

export default Brand;
