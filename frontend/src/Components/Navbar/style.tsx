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
`;

const LightNav = styled(Nav)`
    background-color: #40a3ff;
`;

const DarkNav = styled(Nav)`
    background-color: #0056b3;
`;

export { LightNav, DarkNav };