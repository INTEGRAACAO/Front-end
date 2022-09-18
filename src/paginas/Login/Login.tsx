import { Box } from "@mui/material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service";
import React, { ChangeEvent, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToken, addId } from "../../store/user/action";
import { toast } from "react-toastify";

import "./Login.css";

function Login() {
  let history = useNavigate();
  const dispatch = useDispatch();

  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    apelido: "",
    linkFoto: "",
    senha: "",
    token: "",
    email: "",
  });

  const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    apelido: "",
    linkFoto: "",
    senha: "",
    token: "",
    email: "",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (respUserLogin.token !== "") {
      dispatch(addToken(respUserLogin.token));
      dispatch(addId(respUserLogin.id.toString()));
      history("/home");
    }
  }, [respUserLogin.token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login("/usuario/logar", userLogin, setRespUserLogin);

      toast.success("Usuário logado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } catch (error) {
      toast.error("Dados do usuário inconsistentes. Erro ao logar!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
  }

  return (
    <Grid container sm={12} className="bg-login">
      <Grid item xs={2} className="logo-login">
        <img src="https://i.imgur.com/Zzef03Z.pngyarm" alt="" />
      </Grid>

      <Grid item xs={5} alignItems="center">
        <Box className="card-login">
          <Typography className="card-title-login" variant="h4" align="center">
            Login
          </Typography>

          <form onSubmit={onSubmit}>
            <Box marginY={4}>
              <TextField
                value={userLogin.apelido}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                className="form-input-login"
                id="standard-basic"
                type="text"
                label="Usuário"
                name="apelido"
                required
              />
            </Box>

            <Box marginY={4}>
              <TextField
                value={userLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                className="form-input-login"
                id="standard-basic"
                type="password"
                label="Senha"
                name="senha"
                required
              />
            </Box>

            <div className="form-btn-login">
              
              <Button variant="contained" type="submit">
                Acessar
              </Button>
            </div>

            <div className="criarConta-login">
              <Typography variant="subtitle1" gutterBottom>
                Não tem uma conta?
              </Typography>
              <Link
                to="/cadastroUsuario"
                className="text-decoration-none-login"
              >
                <Typography
                className="cadastre"
                  variant="subtitle1"
                  gutterBottom
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                >
                Cadastre-se
                </Typography>
              </Link>
            </div>
          </form>
          <Box>
            <Box marginRight={1}></Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={5} alignItems="center">
        <img src="https://i.imgur.com/05EJeab.png" alt="" />
      </Grid>
    </Grid>
  );
}

export default Login;
