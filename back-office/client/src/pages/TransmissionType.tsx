import { Helmet } from "react-helmet-async";
import { TransmissionTypeView } from "../sections/transmission-type/view";

const TransmissionType = () => {
    return (
        <>
            <Helmet>
                <title>Type de transmission</title>
            </Helmet>
            <TransmissionTypeView />
        </>
    );
};

export default TransmissionType;
