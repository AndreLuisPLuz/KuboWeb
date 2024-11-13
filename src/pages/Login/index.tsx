import React, { useState } from "react";
import { ButtonEntrar, ButtonRegistrar, Copyright, Container, Container2,  H1, InputUsername, InputSenha, DivLogin } from "./style";
import BouncingKubo from './BouncingKubo'
import { useNavigate } from "react-router-dom";
import { fetchAuthService } from "../../api/services/authService";
import { Auth } from "../../api/types/auth/authRequests";
import { LoginResponse } from "../../api/types/auth/authResponses";

const Login = () => {
  const Navigate = useNavigate()

  const[username, setUsername] = useState<string>("");
  const[password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const[error, setError] = useState<string>("");

  const handleLogin = async () => {
    if (!username || !password){
      setError("Preencha todos os campos.");
      return;
    }

    setLoading(true);
    setError("");

    const payload : Auth = {
      username,
      password
    };

    try{
      const response: LoginResponse = await fetchAuthService(payload);
      localStorage.setItem("token", response.token);
      Navigate("/personalize");

    }catch (error){
      console.error("Erro ao fazer login:", error);
      setError("Erro ao fazer login.");
    }finally{
      setLoading(false);
    }
  };

  const HandleClickRegister = ()=>{
    Navigate("/register");
  }


  return (
    <Container>
      <Container2>
        <BouncingKubo/>
        <H1>KUBO</H1>
        <DivLogin>
          <InputUsername
          id="username" 
          type="username" 
          placeholder="Digite seu username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
          <InputSenha 
          id="passwaord" 
          type="password" 
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)} /> 
        </DivLogin>

        {error && <p style={{color: 'red'}}>{error}</p>}

        <ButtonEntrar onClick={handleLogin} disabled={loading}>{loading ? "Entrando..." : "Entrar"}</ButtonEntrar>
        <ButtonRegistrar onClick={HandleClickRegister}>Não tenho conta.</ButtonRegistrar>
      </Container2>
      <Copyright>© 2024 Kubo Company. Todos os direitos reservados.</Copyright>
    </Container>

  );
}

export default Login;
