import { Container, Container2,  H1, Button, InputNome, InputEmail, InputConfirmarSenha, InputSenha, DivRegister } from "./style";
import BouncingKubo from './BouncingKuboRegister'

const Register = () => {
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
          <Button>Cadastrar</Button>
        </Container2>
      </Container>
    );
  }
  
  export default Register;