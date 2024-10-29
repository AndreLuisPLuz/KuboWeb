import styled from 'styled-components';
import Background from "../../assets/fundoQuarto.png"
import { Room } from '../../components/Room';

const Bedroom = styled(Room)`
    background-image: url(${Background});
`

export {Bedroom}