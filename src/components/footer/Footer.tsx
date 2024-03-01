import { FacebookLogo, InstagramLogo, LinkedinLogo, Envelope, GithubLogo } from '@phosphor-icons/react';
import educaLogo from "../../assets/educacode-logo.png"
import { useNavigate } from 'react-router-dom';
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
      <footer className="bg-cyan-800 text-black ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href={educaLogo} className="flex items-center">
                <img src={educaLogo} className="h-7" alt="Educacode Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap">EducaCode™</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-3">
              <ul className="mb-4 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">Apoie</a>
                </li>
              </ul>
              <ul className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline">Sobre</a>
                </li>
              </ul>
              <ul className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline">Contato</a>
                </li>
              </ul>
            </div>

          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-1" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-400 sm:justify-between ">© 2024 <a href="http://127.0.0.1:5173/login#" className="hover:underline">EducaCode™</a> Todos os direitos reservados.</span>
            <div className="flex mt-4 sm:items-center sm:justify-center gap-4 sm:mt-0">
              <a href={github} className="hover:underline text-dark-500 hover:text-gray-300 dark:hover:text-white" target="_blank"><LinkedinLogo size={25} weight='light' /></a>
              <a href={github} className="hover:underline text-dark-500 hover:text-gray-300 dark:hover:text-white" target="_blank"><InstagramLogo size={25} weight='light' /></a>
              <a href={github} className="hover:underline text-dark-500 hover:text-gray-300 dark:hover:text-white" target="_blank"><FacebookLogo size={25} weight='light' /></a>
              <a href={github} className="hover:underline text-dark-500 hover:text-gray-300 dark:hover:text-white" target="_blank"><GithubLogo size={25} weight='light' /></a>
              <a href="mailto:projetoi225@gmail.com" className="hover:underline text-dark-500 hover:text-gray-300 dark:hover:text-white" target="_blank"><Envelope size={25} weight='light' /></a>

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