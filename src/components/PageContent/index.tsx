import { ReactNode } from "react";
import { Full, Main } from "./style";
import { match } from "ts-pattern";

type PageContentProps = {
    variant: "full" | "squeeze";
    children: ReactNode | ReactNode[];
}

const PageContent = (props: PageContentProps): ReactNode => {
    return match(props.variant)
        .with("full", () =>
            <Full>
                { props.children } 
            </Full>
        )
        .with("squeeze", () => 
            <Main>
                { props.children }
            </Main>
        )
        .exhaustive();
};

export default PageContent;