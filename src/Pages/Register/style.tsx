import styled from "styled-components";
import kubo from "../../assets/kubo.png";

const Container = styled.div`
    background-color: #0a1c36;
    background-size: 100vw 100vh;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Audiowide", sans-serif;
    color: #000000;
    font-size: 2rem;
`;
const Container2 = styled.div`
    background-color: #f7eded;
    width: 550px;
    height: 550px;
    border-radius: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`;

const Container3 = styled.div`
    background-image: url(${kubo});
    background-size: 100% 90%;
    height: 40%;
    width: 40%;
    border-radius: 30px;
    position: absolute;
    bottom: 80%;
    left: 0;
    right: 0;
    margin: auto;
`;

const H1 = styled.h1`
    margin-top: 8rem;
    font-size: 32px;

`;

const Button = styled.button`
    width: 180px;
    font-size: 1rem;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #0a1c36; 
    color: #ffffff;
    cursor: pointer;
    &:hover {
        background-color: #0056b3
    }
    margin-top: 50px;

`;

const InputNome = styled.input`
border: none;
    border-bottom: 2px solid #000000;
    background: transparent;
    outline: none;
    color: #000000;
    padding: 8px;
    width: 100%;
    margin-bottom: 16px;

`;

const InputEmail = styled.input`
border: none;
    border-bottom: 2px solid #000000;
    background: transparent;
    outline: none;
    color: #000000;
    padding: 8px;
    width: 100%; 
    margin-bottom: 16px;

`;

const InputSenha = styled.input`
border: none;
    border-bottom: 2px solid #000000;
    background: transparent;
    outline: none;
    color: #000000;
    padding: 8px;
    width: 100%;
    margin-bottom: 16px;

`;

const InputConfirmarSenha = styled.input`
border: none;
    border-bottom: 2px solid #000000;
    background: transparent;
    outline: none;
    color: #000000;
    padding: 8px;
    width: 100%;
    margin-bottom: 16px;

`;

const DivRegister = styled.div`
display: flex;
    flex-direction: column;
    width: 350px;
    margin-top: 50px;
    align-items: start; /* Centraliza os campos de entrada e o botão */
    label {

        font-size: 0.8rem;
        color: #000000;
    }
`;

const Copyright = styled.div`
    position: absolute; 
    bottom: 20px; 
    left: 50%; 
    transform: translateX(-50%);
    font-size: 0.8rem; 
    color: #f7f7f7; 
`;

export {Copyright, Container, Container2, Container3, H1, Button, InputNome, InputEmail, InputConfirmarSenha, InputSenha, DivRegister};