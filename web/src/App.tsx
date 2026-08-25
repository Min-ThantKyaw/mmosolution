import {
 Routes,
 Route,
 useParams,
 useNavigate,
} from "react-router-dom";
import Footer from "./components/layout/Footer.tsx";
import Navbar from "./components/layout/Navbar.tsx";

export default function App(){
 const navigate = useNavigate();
 return (
   <div>
     <Navbar/>
    <Footer/>
 </div>
 );
};