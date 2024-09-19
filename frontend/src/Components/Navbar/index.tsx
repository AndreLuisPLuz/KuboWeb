import { ReactNode } from "react";
import { Button, ButtonsContainer, FlatIcon, Nav } from "./style";
import lightBulb from "../../assets/light-bulb.png";

const Navbar = (): ReactNode => {
    return (
        <Nav>
            <ButtonsContainer>
                <Button>Mudar fundo</Button>
                <Button>Configurações</Button>
            </ButtonsContainer>
            <FlatIcon src={ lightBulb }/>
        </Nav>
    );
};

export default Navbar;