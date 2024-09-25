import { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import PageContent from "../../components/PageContent";
import Footer from "../../components/Footer";
import {Bedroom} from "./style"
import { Arrow } from "../../components/Arrow Left";
import ArrowLeft from "../../assets/SetaEsquerda.png"
import Seta from "../../assets/Seta.png"
import { ArrowRight } from "../../components/Arrow Rigth";
import { useNavigate } from "react-router-dom";

const BedroomPage = (): ReactNode => {
    const Navigate = useNavigate()

    function HandleClickLeft(){
        Navigate("/kitchen")
      }
    
    function HandleClickRight(){
        Navigate("/home")
    }
    return (
        <>
            <Navbar/>
            <PageContent variant="squeeze">
                <Arrow src={ArrowLeft} onClick={HandleClickLeft}/>
                <Bedroom/>
                <ArrowRight src={Seta} onClick={HandleClickRight}/>
            </PageContent>
            <Footer/>
        </>
    );
};

export default BedroomPage;