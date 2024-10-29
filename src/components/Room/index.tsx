import styled from 'styled-components';
import Background from "../../assets/fundoSala.png"

const Room = styled.div`
    background-image: url(${ Background });
    background-repeat: no-repeat;
    background-size: 100% 100%;

    height: 100%;
    width: 100%;
`

export {Room}