import { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import PageContent from "../../components/PageContent";
import Footer from "../../components/Footer";

const Home = (): ReactNode => {
    return (
        <>
            <Navbar/>
            <PageContent variant="squeeze">
                Teste
            </PageContent>
            <Footer/>
        </>
    );
};

export default Home;