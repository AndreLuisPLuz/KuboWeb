import { ReactNode, useContext, useEffect, useState } from "react";
import { AccessoryOption, Button, Container, ContainerA, CustomizerContainer, CustomizerContainerPersonalize, EyeOption, H1, ImageContainer, MascoteContainer, MascotPreview, OptionsContainer } from "./style";

import Mouth from "../../components/Mouth";
import { useNavigate } from "react-router-dom";
import KuboService from "../../integrations/api/kuboService";
import { CosmeticDto } from "../../integrations/api/types/cosmetics/cosmeticResponses";
import { UserContext } from "../../contexts/User";

const Personalize = (): ReactNode => {
    const kuboService = KuboService.getInstance();

    const user = useContext(UserContext);

    const [eyeOptions, setEyeOptions] = useState<CosmeticDto[]>([]);
    const [hatOptions, setHatOptions] = useState<CosmeticDto[]>([]);

    const [selectedEye, setSelectedEye] = useState<CosmeticDto | null>(null);
    const [selectedAccessory, setSelectedAccessory] = useState<CosmeticDto | null>(null);
    const [color, setColor] = useState<string>('#57a0f3');

    useEffect(() => {
        const pagination = { page: 1, size: 20 };

        kuboService.fetchCosmetics("Hat", pagination).then(result => {
            setHatOptions(result.data);
        });

        kuboService.fetchCosmetics("Eyes", pagination).then(result => {
            setEyeOptions(result.data);
        });
    }, []);

    const Navigate = useNavigate()

    async function HandleClick() {
        const created = await kuboService.createKubo({
            nickname: "Porpeta",
            color: color,
            userId: user.userId,
            eyesId: selectedEye?.id,
            hatId: selectedAccessory?.id
        });

        if (created)
            Navigate("/home");
    };

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

export default Personalize;