import { ReactNode, useContext } from "react";
import { ButtonsContainer, DarkNav, LightNav } from "./style";
import { ThemeContext } from "../../contexts/Theme";
import { match } from "ts-pattern";

const Navbar = (): ReactNode => {
    const theme = useContext(ThemeContext);

    return match(theme.palette)
        .with("light", () =>
            <LightNav>
                <NavbarContent/>
            </LightNav>
        )
        .with("dark", () =>
            <DarkNav>
                <NavbarContent/>
            </DarkNav>
        )
        .exhaustive();
};

const NavbarContent = (): ReactNode => {
    return (
        <>
            <ButtonsContainer>
                
            </ButtonsContainer>
        </>
    );
};

export default Navbar;