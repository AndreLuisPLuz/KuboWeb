import React, { useState } from "react";
import { ContainerA, Button, ImageContainer, Container, H1, MascoteContainer, CustomizerContainerPersonalize, AccessoryOption, EyeOption, OptionsContainer, MascotPreview, CustomizerContainer } from "./style"
import TradicionalEyes from "../../assets/tradicionalEyes.png"
import Normal from "../../assets/normalEyes.png"
import Calm from "../../assets/calmEyes.png"
import Cutie from "../../assets/cutieEyes.png"
import Savage from "../../assets/savageEyes.png"
import Irony from "../../assets/IronyEyes.png"
import Dead from "../../assets/deadEyes.png"
import Shy from "../../assets/shyEyes.png"
import Cry from "../../assets/cryEyes.png"
import Hat from "../../assets/femmehatAccessory.png"
import MascHat from "../../assets/maschatAccessory.png"
import pinkTie from "../../assets/pinkTieAccessory.png"
import blueTie from "../../assets/blueTieAccessory.png"
import RabbitEars from "../../assets/rabbitEarsAccessory.png"
import Mouth from "../../components/Mouth/index"
import { useNavigate } from "react-router-dom";



const eyeOptions = [
    { id: 1, name: "Tradicional", image: TradicionalEyes },
    { id: 2, name: "Normal", image: Normal },
    { id: 4, name: "Calm", image: Calm },
    { id: 5, name: "Cutie", image: Cutie },
    { id: 6, name: "Savage", image: Savage },
    { id: 7, name: "Irony", image: Irony },
    { id: 8, name: "Dead", image: Dead },
    { id: 9, name: "Shy", image: Shy },
    { id: 10, name: "Cry", image: Cry },
];

const accessoryOptions = [
    { id: 1, name: "FemmeHat", image: Hat },
    { id: 2, name: "MascHat", image: MascHat },
    { id: 3, name: "pinkTie", image: pinkTie },
    { id: 4, name: "blueTie", image: blueTie },
    { id: 5, name: "RabbitEars", image: RabbitEars },
];

const MascotCustomizer: React.FC = () => {
    const [selectedEye, setSelectedEye] = useState<number | null>(null);
    const [selectedAccessory, setSelectedAccessory] = useState<number | null>(null);
    const [color, setColor] = useState<string>('#57a0f3');

    const Navigate = useNavigate()

    function HandleClick(){
        Navigate("/home")
      }
    return (
        <CustomizerContainer>
            <CustomizerContainerPersonalize>
                <H1>CORES</H1>
                <OptionsContainer>
                    <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                </OptionsContainer>
                <H1>OLHOS</H1>
                <OptionsContainer>
                    {eyeOptions.map((eye) => (
                        <EyeOption
                            key={eye.id}
                            isSelected={selectedEye === eye.id}
                            onClick={() => setSelectedEye(eye.id)}
                        >
                            <img src={eye.image} alt={eye.name} />
                        </EyeOption>
                    ))}
                </OptionsContainer>
                <H1>ACESSORIOS</H1>
                <OptionsContainer>
                    {accessoryOptions.map((acc) => (
                        <AccessoryOption
                            key={acc.id}
                            isSelected={selectedAccessory === acc.id}
                            onClick={() => setSelectedAccessory(acc.id)}
                        >
                            <img src={acc.image} alt={acc.name} />
                        </AccessoryOption>
                    ))}
                </OptionsContainer>
            </CustomizerContainerPersonalize>
            <ContainerA>
                <MascoteContainer>
                    <Container>
                        <MascotPreview backgroundColor={color}>
                            <ImageContainer>
                                {selectedAccessory !== null && (
                                    <img src={accessoryOptions.find((acc) => acc.id === selectedAccessory)?.image} alt="Accessory" />
                                )}
                            </ImageContainer>
                            {selectedEye !== null && (
                                <img src={eyeOptions.find((eye) => eye.id === selectedEye)?.image} alt="Eye" />
                            )}
                            <Mouth />
                        </MascotPreview>
                    </Container>
                </MascoteContainer>
                <Button onClick={HandleClick}>CRIAR</Button>
            </ContainerA>
        </CustomizerContainer>
    );
};

export default MascotCustomizer;



