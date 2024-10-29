import { ButtonEntrar, ButtonRegistrar, Copyright, Container, Container2,  H1, InputEmail, InputSenha, DivLogin } from "./style";
import BouncingKubo from './BouncingKubo'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate()

  function HandleClick(){
    Navigate("/personalize")
  }

  function HandleClickRegister(){
    Navigate("/register")
  }


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
        <ButtonEntrar onClick={HandleClick}>Entrar</ButtonEntrar>
        <ButtonRegistrar onClick={HandleClickRegister}>Não tenho conta.</ButtonRegistrar>
      </Container2>
      <Copyright>© 2024 Kubo Company. Todos os direitos reservados.</Copyright>
    </Container>

  );
}

export default Login;
