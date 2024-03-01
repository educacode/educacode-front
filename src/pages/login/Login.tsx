import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';


function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext)

  useEffect(() => {
    if (usuario && usuario.token !== "") {
      navigate('/home');
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold text-teal-950">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={login}>
          <h2 className="text-slate-900 text-5xl ">Entrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <button type='submit' className="rounded bg-indigo-400 hover:bg-indigo-900 text-white w-1/2 py-2 flex justify-center">
            {isLoading ? <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
              <span>Entrar</span>}
          </button>

          <hr className="border-slate-800 w-full" />

          <p>
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="text-indigo-800 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center justify-center flex-grow">
            <img className="h-48 w-full max-w-full rounded-lg" src="https://t3.ftcdn.net/jpg/07/18/07/22/240_F_718072240_zWDG1uJ0e0BBqEaXeTA0g1aF0NTiU6JE.jpg" alt="" />
          </div>
          <div className="flex items-center justify-center flex-grow">
            <img className="h-48 w-full max-w-full rounded-lg" src="https://t4.ftcdn.net/jpg/07/08/01/95/240_F_708019537_VFMIetyPhHFOzhGdhEZm6jeFYxpEKREA.jpg" alt="" />
          </div>
          <div className="flex items-center justify-center flex-grow">
            <img className="h-48 w-full max-w-full rounded-lg" src="https://t3.ftcdn.net/jpg/07/08/01/82/240_F_708018293_IolPlj8bUQYJ8W11NVnZ3jD0xy5VW2mD.jpg" alt="" />
          </div>
          <div className="flex items-center justify-center flex-grow">
            <img className="h-48 w-full max-w-full rounded-lg" src="https://t4.ftcdn.net/jpg/06/52/88/65/240_F_652886511_MO30ydHJ9sf1KMrDLUyaH0PFWAnlBziV.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;