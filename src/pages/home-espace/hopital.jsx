import { Outlet } from "react-router-dom";


function Hopital() {
    return (
        <>
        <div>
        <h2>Hopital</h2>
        <img src="src\assets\hopital.jpg"/>
        <Outlet/>

        </div>

        </>
    )
}

export default Hopital;