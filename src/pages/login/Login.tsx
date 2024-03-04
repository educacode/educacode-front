import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
import logo01 from '../../assets/login01.jpeg';
import logo02 from '../../assets/login02.jpeg';
import logo03 from '../../assets/login03.jpeg';
import logo04 from '../../assets/login04.jpeg'

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
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold text-teal-950 ">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={login}>
          <h2 className="text-cyan-800 font-bold text-5xl">Entrar</h2>
          <div className="flex flex-col w-full text-teal-950">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="e-mail utilizado no cadastro"
              className="border-2 border-slate-700 rounded p-2 "
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full text-teal-950 ">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Insira sua senha"
              className="border-2 border-slate-700 rounded p-2 "
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <button type='submit' className="rounded bg-cyan-700 hover:bg-zinc-400 text-white w-1/2 py-2 flex justify-center">
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

          <p className='text-cyan-900 mb-4'>
            Transforme seus produtos em oportunidades!{' '}
            <Link to="/cadastro" className='text-gray-100 hover:underline transition duration-300'>Clique aqui</Link> para criar sua conta e começar a vender agora.
          </p>

          <p className='text-cyan-900'>
            Quer apenas dar uma olhada? <Link to="/produtos" className="text-gray-100 hover:underline transition duration-300">Clique aqui</Link> para explorar nossos produtos.
          </p>



        </form>
        <div className="grid grid-cols-2 gap-6 ">
          <div className="flex items-center justify-center flex-grow">
            <img className="h-48 w-full max-w-full rounded-lg" src={logo01} alt="" />
          </div>
          <div className="flex items-center justify-center flex-grow">
            <img className="h-48 w-full max-w-full rounded-lg" src={logo02} alt="" />
          </div>
          <div className="flex items-center justify-center flex-grow">
            <img className="h-48 w-full max-w-full rounded-lg" src={logo03} alt="" />
          </div>
          <div className="flex items-center justify-center flex-grow">
            <img className="h-48 w-full max-w-full rounded-lg" src={logo04} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;