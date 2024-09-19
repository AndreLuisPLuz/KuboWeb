import styled from "styled-components";

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;

    height: 50px;
    width: 100vw;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 2rem 0 2rem;
`;

const LightNav = styled(Nav)`
    background-color: #40a3ff;
    border-bottom: 2px solid #0056b3;
`;

const DarkNav = styled(Nav)`
    background-color: #0056b3;
    border-bottom: 2px solid #fff;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
`;

export { LightNav, DarkNav, ButtonsContainer };