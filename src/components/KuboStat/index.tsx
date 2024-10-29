import { ReactNode } from "react";
import { Box, Stat } from "./style";

import sleep from "../../assets/sleep.png";
import chicken from "../../assets/chicken.png";
import smile from "../../assets/smile.png";
import { match } from "ts-pattern";

type KuboStatProps = {
    variant: "health" | "hunger" | "happiness";
};

const KuboStat = (props: KuboStatProps): ReactNode => {
    const icon = match(props.variant)
        .with("health", () => sleep)
        .with("hunger", () => chicken)
        .with("happiness", () => smile)
        .exhaustive();

    return (
        <Box className={ props.variant }>
            <Stat className={ props.variant }>
                <img src={ icon } alt= { props.variant } />
            </Stat>
        </Box>
    );
};

export default KuboStat;