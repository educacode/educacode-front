import { FacebookLogo, InstagramLogo, LinkedinLogo, Envelope, GithubLogo } from '@phosphor-icons/react';
import educaLogo from "../../assets/educacode-logo2.png"
import { Link, useNavigate } from 'react-router-dom';
import { toastAlert } from '../../utils/ToastAlert';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Footer() {
  const github = "https://github.com/educacode";

  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    toastAlert('Usuário deslogado com sucesso', 'sucesso')
    navigate('/login')
  }

  let footerComponent

  if (usuario.token !== "") {
    footerComponent = (
      <footer className="bg-cyan-700 text-black dark:bg-sky-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href={educaLogo} className="flex items-center">
                <img src={educaLogo} className="h-7" alt="Educacode Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-zinc-400">EducaCode™</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-3">
              <ul className="mb-4 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                <li className="mb-4">
                  <a href="https://github.com/educacode" className="hover:underline text-zinc-400">Apoie</a>
                </li>
              </ul>
              <ul className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                <li className="mb-4">
                  <Link to="/about" className="hover:underline text-zinc-400">Sobre</Link>
                </li>
              </ul>
              <ul className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                <li className="mb-4">
                  <Link to="/contato" className="hover:underline text-zinc-400">Contato</Link>
                </li>
              </ul>
            </div>

          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-1 " />
          <div className="sm:flex sm:items-center sm:justify-between text-zinc-400">
            <span className="text-sm text-gray-400 sm:justify-between ">© 2024 <a href="http://127.0.0.1:5173/login#" className="hover:underline">EducaCode™</a> Todos os direitos reservados.</span>
            <div className="flex mt-4 sm:items-center sm:justify-center gap-4 sm:mt-0">
              <a href={github} className="hover:underline text-dark-500 hover:text-gray-300 dark:hover:text-white" target="_blank"><LinkedinLogo size={25} weight='light' /></a>
              <a href={github} className="hover:underline text-dark-500 hover:text-gray-300 dark:hover:text-white" target="_blank"><InstagramLogo size={25} weight='light' /></a>
              <a href={github} className="hover:underline text-dark-500 hover:text-gray-300 dark:hover:text-white" target="_blank"><FacebookLogo size={25} weight='light' /></a>
              <a href={github} className="hover:underline text-dark-500 hover:text-gray-300 dark:hover:text-white" target="_blank"><GithubLogo size={25} weight='light' /></a>
              <a href="mailto:educacode@gmail.com" className="hover:underline text-dark-500 hover:text-gray-300 dark:hover:text-white" target="_blank"><Envelope size={25} weight='light' /></a>

            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer;