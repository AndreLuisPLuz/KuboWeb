import { ReactNode, useContext, useEffect } from "react";
import { Button, ButtonsContainer, ThemeIcon, Nav, IconBackground } from "./style";
import { ThemeContext } from "../../contexts/Theme";
import lightBulb from "../../assets/light-bulb.png";

const Navbar = (): ReactNode => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <Nav>
            <ButtonsContainer>
                <Button>Mudar fundo</Button>
                <Button>Configurações</Button>
            </ButtonsContainer>
            <IconBackground>
                <ThemeIcon src={ lightBulb } onClick={ toggleTheme }/>
            </IconBackground>
        </Nav>
    );
};

export default Navbar;