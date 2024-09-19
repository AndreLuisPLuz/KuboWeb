import React from "react";
import background from "../../assets/capaLogin.png";
import { Button, Container, Container2, Container3, H1, InputEmail, InputSenha, DivLogin } from "./style";
import BouncingKubo from './BouncingKubo'

const Login = () => {
  return (
    <Container>
      <Container2>
        <BouncingKubo/>
        <H1>
          KUBO
        </H1>
        <DivLogin>
          <InputEmail id="email" type="email" placeholder="Digite seu email" />
          {/* <label htmlFor="email">Email</label> */}
          <InputSenha id="senha" type="password" placeholder="Digite sua senha" />
          {/* <label htmlFor="senha">Senha</label> */}
        </DivLogin>
        <Button>Entrar</Button>
      </Container2>
    </Container>
  );
}

export default Login;
