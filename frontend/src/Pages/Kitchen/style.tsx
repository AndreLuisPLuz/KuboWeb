import styled from 'styled-components';
import Background from "../../assets/fundoCozinha.png"
import { Room } from '../../components/Room';

const Kitchen = styled(Room)`
    background-image: url(${Background});
`

export {Kitchen}