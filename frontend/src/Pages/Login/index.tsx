import React from "react";
import { ButtonEntrar, ButtonRegistrar, Copyright, Container, Container2,  H1, InputEmail, InputSenha, DivLogin } from "./style";
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
        <ButtonEntrar>Entrar</ButtonEntrar>
        <ButtonRegistrar>Não tenho conta.</ButtonRegistrar>
      </Container2>
      <Copyright>© 2024 Kubo Company. Todos os direitos reservados.</Copyright>
    </Container>

  );
}

export default Login;
