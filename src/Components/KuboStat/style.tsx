import styled from "styled-components";

const Box = styled.div`
    height: 100px;
    width: 100px;

    background-color: var(--main-bg-color);
    border-radius: 12px;
    border: 2px solid var(--nav-border-color);
`;

const Stat = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--stat-fill-color);
    border-radius: 10px;
`;

export { Box, Stat };