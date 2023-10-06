import { useContext } from "react";
import { AuthContext } from "../../Sharde/AuthProvider/AuthProvider";


const Home = () => {
    const myName = useContext(AuthContext);
    return (
        <div>
            <h1>Home {myName.name}</h1>
        </div>
    );
};

export default Home;