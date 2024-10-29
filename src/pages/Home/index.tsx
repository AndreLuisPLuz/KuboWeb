import { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import PageContent from "../../components/PageContent";
import Footer from "../../components/Footer";
import {Home1} from "./style"
import { Arrow } from "../../components/Arrow Left";
import ArrowLeft from "../../assets/SetaEsquerda.png"
import Seta from "../../assets/Seta.png"
import { ArrowRight } from "../../components/Arrow Rigth";
import { useNavigate } from "react-router-dom";

const Home = (): ReactNode => {

    const Navigate = useNavigate()

    function HandleClickLeft(){
        Navigate("/bedroom")
      }
    
    function HandleClickRight(){
        Navigate("/kitchen")
    }
    return (
        <>
            <Navbar/>
            <PageContent variant="squeeze">
                <Arrow src={ArrowLeft} onClick={HandleClickLeft}/>
                <Home1/>
                <ArrowRight src={Seta} onClick={HandleClickRight}/>
            </PageContent>
            <Footer/>
        </>
    );
};

export default Home;