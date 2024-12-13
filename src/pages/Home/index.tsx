import { ReactNode, useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import PageContent from "../../components/PageContent";
import Footer from "../../components/Footer";
import {Home1} from "./style"
import { Arrow } from "../../components/Arrow Left";
import ArrowLeft from "../../assets/SetaEsquerda.png"
import Seta from "../../assets/Seta.png"
import { ArrowRight } from "../../components/Arrow Rigth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/User";
import { Container, ImageContainer, MascoteContainer, MascotPreview } from "../Personalize/style";
import Mouth from "../../components/Mouth";
import { KuboDto } from "../../integrations/api/types/kubo/kuboResponses";
import KuboService from "../../integrations/api/kuboService";

const Home = (): ReactNode => {
    const kuboService = KuboService.getInstance();

    const [kubo, setKubo] = useState<KuboDto>({} as KuboDto);
    const user = useContext(UserContext);

    useEffect(() => {
        if (user.kubo !== undefined) {
            console.log(user.kubo);
            setKubo(user.kubo);
            return;
        }
    
        kuboService.fetchKubo().then(result => {
            user.storeKubo(result);
            console.log(user.kubo);
            setKubo(result);
        })
    }, [])

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
                <Home1>
                    <MascoteContainer>
                        <Container>
                            <MascotPreview backgroundColor={kubo.color}>
                                <ImageContainer>
                                    <img src={ kubo.hat?.imagePath || "" }/>
                                </ImageContainer>
                                <img src={ kubo.eyes?.imagePath || "" }/>
                                <Mouth />
                            </MascotPreview>
                        </Container>
                    </MascoteContainer>
                </Home1>
                <ArrowRight src={Seta} onClick={HandleClickRight}/>
            </PageContent>
            <Footer/>
        </>
    );
};

export default Home;