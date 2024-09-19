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

    background-color: var(--nav-bg-color);
    border-bottom: 2px solid var(--nav-border-color);
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
`;

const Button = styled.button`
    height: 35px;
    width: fit-content;

    background-color: var(--nav-button-bg-color);
    color: var(--nav-button-color);
`;

const FlatIcon = styled.img`
    height: 35px;
    width: 35px;

    background-color: #fff;
    border: 2px solid var(--nav-border-color);

    cursor: pointer;
`;

export { Nav, ButtonsContainer, Button, FlatIcon };