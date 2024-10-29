import { Copyright,Container, Container2,  H1, Button, InputNome, InputEmail, InputConfirmarSenha, InputSenha, DivRegister } from "./style";
import BouncingKubo from './BouncingKuboRegister'
import { useNavigate } from "react-router-dom";

const Register = () => {

  const Navigate = useNavigate()

  function HandleClick(){
    Navigate("/login")
  }
    return (
      <Container>
        <Container2>
          <BouncingKubo/>
          <H1>
            KUBO
          </H1>
          <DivRegister>
            <InputNome id="nome"  type="nome" placeholder="Digite seu nome" />
            <InputEmail id="email" type="email" placeholder="Digite seu email" />
            <InputSenha id="senha" type="password" placeholder="Digite sua senha" />
            <InputConfirmarSenha id="senha" type="password" placeholder="Confirme sua senha" />
          </DivRegister>
          <Button onClick={HandleClick}>Cadastrar</Button>
        </Container2>
        <Copyright>© 2024 Kubo Company. Todos os direitos reservados.</Copyright>
      </Container>
    );
  }
  
  export default Register;