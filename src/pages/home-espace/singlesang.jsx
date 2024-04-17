import { useParams } from "react-router-dom";
// import ProductService from "../models/services/productService.js";

import SangPreview from "../../components/sang-preview/sang-preview.jsx";
import SangService from "../../components/models/services/sangService.js";

function SingleSang() {
    const {id} = useParams();

    const data = SangService.getSangs();

    const sang = data.find((sang) => sang.id === id);

    return (
        <>
        <SangPreview sang = {sang} seeMore={true}></SangPreview>
        </>
    )
}

export default SingleSang;
