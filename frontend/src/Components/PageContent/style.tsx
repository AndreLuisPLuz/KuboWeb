import styled from "styled-components";

const Main = styled.main`
    position: relative;
    top: 50px;

    min-height: calc(100vh - 200px);
    width: 100vw;

    display: flex;
    flex-direction: column;
    
    padding: 1rem 1.5rem 1rem 1.5rem;

    background-color: var(--main-bg-color);
    color: var(--main-color);
`;

const Full = styled(Main)`
    min-height: 100vh;
`;

export { Main, Full };