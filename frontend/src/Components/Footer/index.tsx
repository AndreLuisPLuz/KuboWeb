import { ReactNode } from "react";
import { Foot, FooterItemsContainer } from "./style";
import KuboStat from "../KuboStat";

const Footer = (): ReactNode => {
    return (
        <Foot>
            <FooterItemsContainer>
                <KuboStat variant="health"/>
                <KuboStat variant="hunger"/>
                <KuboStat variant="happiness"/>
            </FooterItemsContainer>
        </Foot>
    );
};

export default Footer;