import React, { useEffect, useState } from "react";
import { AccessoryOption, Button, Container, ContainerA, CustomizerContainer, CustomizerContainerPersonalize, EyeOption, H1, ImageContainer, MascoteContainer, MascotPreview, OptionsContainer } from "./style";

import Mouth from "../../components/Mouth";
import { useNavigate } from "react-router-dom";
import { Cosmetic } from "../../api/types/cosmetics/cosmeticResponses";
import { fetchCosmeticsService } from "../../api/services/cosmeticsService";

const MascotCustomizer: React.FC = () => {
    const [eyeOptions, setEyeOptions] = useState<Cosmetic[]>([]);
    const [hatOptions, setHatOptions] = useState<Cosmetic[]>([]);

    const [selectedEye, setSelectedEye] = useState<Cosmetic | null>(null);
    const [selectedAccessory, setSelectedAccessory] = useState<Cosmetic | null>(null);
    const [color, setColor] = useState<string>('#57a0f3');

    const Navigate = useNavigate()

    function HandleClick(){
        Navigate("/home")
    };

    useEffect(() => {
        const token = localStorage.getItem("TOKEN") as string;
        const pagination = { page: 1, size: 20 };

        fetchCosmeticsService("Hat", pagination, token).then(result => {
            setHatOptions(result.cosmetics);
        });

        fetchCosmeticsService("Eyes", pagination, token).then(result => {
            setEyeOptions(result.cosmetics);
        });
    }, []);

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
                            key={ eye.id }
                            isSelected={ selectedEye?.id === eye.id }
                            onClick={() => setSelectedEye(eye)}
                        >
                            <img src={ eye.imagePath } alt={ eye.name } />
                        </EyeOption>
                    ))}
                </OptionsContainer>
                <H1>ACESSORIOS</H1>
                <OptionsContainer>
                    {hatOptions.map((acc) => (
                        <AccessoryOption
                            key={ acc.id }
                            isSelected={ selectedAccessory?.id === acc.id }
                            onClick={() => setSelectedAccessory(acc)}
                        >
                            <img src={ acc.imagePath } alt={ acc.name } />
                        </AccessoryOption>
                    ))}
                </OptionsContainer>
            </CustomizerContainerPersonalize>
            <ContainerA>
                <MascoteContainer>
                    <Container>
                        <MascotPreview backgroundColor={color}>
                            <ImageContainer>
                                { selectedAccessory !== null && (
                                    <img src={hatOptions.find((acc) => acc.id === selectedAccessory.id)?.imagePath} alt="Accessory" />
                                )}
                            </ImageContainer>
                            {selectedEye !== null && (
                                <img src={ eyeOptions.find((eye) => eye.id === selectedEye.id)?.imagePath } alt="Eye" />
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