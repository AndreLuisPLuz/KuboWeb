import styled from "styled-components";

const Foot = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    
    height: 150px;
    width: 100vw;

    display: flex;
    flex-direction: row;
    justify-content: center;

    background-color: var(--nav-bg-color);
    border-top: 2px solid var(--nav-border-color);
`;

const FooterItemsContainer = styled.div`
    height: 100%;
    width: fit-content;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;

    padding: 1rem 2rem 1rem 2rem;
`;

export { Foot, FooterItemsContainer };