import { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import PageContent from "../../components/PageContent";
import Footer from "../../components/Footer";
import {Kitchen} from "./style"
import { Arrow } from "../../components/Arrow Left";
import ArrowLeft from "../../assets/SetaEsquerda.png"
import Seta from "../../assets/Seta.png"
import { ArrowRight } from "../../components/Arrow Rigth";
import { useNavigate } from "react-router-dom";

const KitchenPage = (): ReactNode => {
    const Navigate = useNavigate()

    function HandleClickLeft(){
        Navigate("/home")
      }
    
    function HandleClickRight(){
        Navigate("/bedroom")
    }
    return (
        <>
            <Navbar/>
            <PageContent variant="squeeze">
                <Arrow src={ArrowLeft} onClick={HandleClickLeft}/>
                <Kitchen/>
                <ArrowRight src={Seta} onClick={HandleClickRight}/>
            </PageContent>
            <Footer/>
        </>
    );
};

export default KitchenPage;