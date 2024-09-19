import { ReactNode, useContext, useEffect } from "react";
import { Button, ButtonsContainer, FlatIcon, Nav } from "./style";
import lightBulb from "../../assets/light-bulb.png";
import { ThemeContext } from "../../contexts/Theme";

const Navbar = (): ReactNode => {
    const { palette, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        const isDark = (palette == "dark");
        document.documentElement.classList.toggle("dark", isDark);
    }, [palette]);

    return (
        <Nav>
            <ButtonsContainer>
                <Button>Mudar fundo</Button>
                <Button>Configurações</Button>
            </ButtonsContainer>
            <FlatIcon src={ lightBulb } onClick={ toggleTheme }/>
        </Nav>
    );
};

export default Navbar;