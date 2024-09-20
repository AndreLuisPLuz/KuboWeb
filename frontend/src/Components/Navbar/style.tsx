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
    height: 30px;
    width: fit-content;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem 1rem 0.5rem 1rem;

    font-family: "Kanit", Inter;
    background-color: var(--nav-button-bg-color);
    color: var(--nav-button-color);
    border-radius: 20px;
    border: 1px solid var(--nav-border-color);
`;

const ThemeIcon = styled.img`
    height: 32px;
    width: 32px;

    cursor: pointer;
`;

const IconBackground = styled.div`
    height: 40px;
    width: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fff;
    border-radius: 100%;
    border: 2px solid var(--nav-border-color);

    cursor: pointer;
`;

export {
    Nav,
    ButtonsContainer,
    Button,
    ThemeIcon,
    IconBackground
};