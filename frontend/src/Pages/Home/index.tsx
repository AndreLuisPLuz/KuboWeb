import { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import PageContent from "../../components/PageContent";

const Home = (): ReactNode => {
    return (
        <>
            <Navbar/>
            <PageContent variant="squeeze">
                Teste
            </PageContent>
        </>
    );
};

export default Home;