import SangPreview from "../../components/sang-preview/sang-preview.jsx";
import SangService from "../../components/models/services/sangService.js";

function SangsList(){
    const data = SangService.getSangs();

    return (
        <>
        <ul className="product">
            {data.map((sang, index) => (
                <li key={index}>
                    <SangPreview sang={sang} seeMore={false}></SangPreview> 
                </li>
            ))}
        </ul>
        </>
    );
}

export default SangsList;