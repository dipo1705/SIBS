import { Link } from "react-router-dom";


function SangPreview({sang, seeMore}){
    return(
        <div>
            <img src={sang.image} alt="sang image"/>
            <h2>{sang.name}</h2>
            {seeMore ?(
                <p>{sang.description}</p>
            ) : (
                <Link to={`/produitssanguins/${sang.id}`}>Voir plus</Link>
            )}
        </div>
    )
}

export default SangPreview;