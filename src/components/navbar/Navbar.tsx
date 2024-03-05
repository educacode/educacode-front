import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlert } from '../../utils/ToastAlert'
import educaLogo from "../../assets/educacode-logo2.png"
import { HouseSimple, FilePlus, ListBullets, SignOut, Article, ChatTeardrop, Code, CodeBlock } from '@phosphor-icons/react';

function Navbar() {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const [] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);


  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
  };

  const closeDropdown1 = () => {
    setDropdownOpen1(false);
  };

  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    toastAlert('Usuário deslogado com sucesso', 'sucesso')
    navigate('/login')
  }

  let navbarComponent

  if (usuario.token !== "") {
    navbarComponent = (
      <nav className="w-full bg-sky-900 ">
        <div className="container justify-between py-4  flex">
          <div className='pl-8 logo flex items-center gap-2'>
          <Link to='/'><img src={educaLogo} className="h-14" alt="EducaCode Logo" /></Link>
            <div className="inline-flex p-4 text-xl font-bold uppercase tracking-wider text-zinc-400"><Link to='/'>EducaCode</Link></div>
          </div>
          <button
            onClick={toggleNavbar}
            className="lg:hidden inline-flex items-center justify-center border h-10 w-8 text-zinc-400 rounded-md outline-none focus:outline-none ml-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <div
            className={`w-full lg:inline-flex lg:w-auto mt-2 lg:mt-0 ${navbarOpen ? "" : "hidden"} ${navbarOpen ? 'flex' : ''}`}
            onMouseLeave={closeDropdown}
          >
            <ul className="w-full lg:w-auto flex flex-col lg:flex-row lg:space-x-2">

              <li>
                <Link to='/' className='flex px-4 items-center gap-1 py-2 font-medium text-zinc-200 hover:bg-cyan-600 hover:text-zinc-100  rounded-md'><HouseSimple size={17} className="icon"></HouseSimple>Home</Link>
              </li>
              <li>
                <Link to='/about' className='flex items-center gap-1 px-4 py-2 font-medium text-zinc-200 hover:bg-cyan-600 hover:text-zinc-100  rounded-md'><Article size={17} className="icon"></Article>Sobre</Link>
              </li>
              <li>
                <Link to='/contact' className='flex items-center gap-1 px-4 py-2 font-medium text-zinc-200 hover:bg-cyan-600 hover:text-zinc-100  rounded-md'><ChatTeardrop size={17} className="icon"></ChatTeardrop>Contato</Link>
              </li>
              <li className="relative">
                <button
                  onMouseEnter={toggleDropdown}
                  className="flex items-center gap-1 w-full outline-none focus:outline-none px-4 py-2 font-medium text-zinc-200 hover:bg-cyan-600 hover:text-zinc-100 rounded-md"
                >
                  <ListBullets size={17} className="icon"></ListBullets>Produtos
                </button>
                <div
                  onMouseLeave={closeDropdown}
                  className={`lg:absolute right-2 rounded-md p-2 bg-cyan-600 ${dropdownOpen ? "" : "hidden"} ${dropdownOpen ? 'flex' : ''}`}
                >
                  <ul className="space-y-2 lg:w-48">
                    <li>
                      <Link to='/produtos' className='flex p-2 font-medium text-slate-200 hover:bg-teal-600 hover:text-white  rounded-md items-center gap-1 '><Code size={17} className="icon"></Code>Todos os cursos</Link>
                    </li>
                    <li>
                      <Link to='/cadastroProduto' className='flex p-2 font-medium text-slate-200 hover:bg-teal-600 hover:text-white  rounded-md items-center gap-1 '><FilePlus size={17} className="icon"></FilePlus>Cadastrar novo curso</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="relative">
                <button
                  onMouseEnter={toggleDropdown1}
                  className="flex w-full outline-none focus:outline-none px-4 py-2 font-medium text-zinc-200 hover:bg-cyan-600 hover:text-zinc-100 rounded-md items-center gap-1"
                >
                  <ListBullets size={17} className="icon"></ListBullets>Categorias
                </button>
                <div
                  onMouseLeave={closeDropdown1}
                  className={`lg:absolute left-2 rounded-md p-2 bg-cyan-600 ${dropdownOpen1 ? "" : "hidden"} ${dropdownOpen1 ? 'flex' : ''}`}
                >
                  <ul className="space-y-2 lg:w-48">
                    <li>
                      <Link to='/categorias' className='flex p-2 font-medium text-slate-200 hover:bg-teal-600 hover:text-white  rounded-md items-center gap-1'><CodeBlock size={17} className="icon"></CodeBlock>Todas as categorias</Link>
                    </li>
                    <li>
                      <Link to='/cadastroCategoria' className='flex p-2 font-medium text-slate-200 hover:bg-teal-600 hover:text-white  rounded-md items-center gap-1'><FilePlus size={17} className="icon"></FilePlus>Cadastrar nova categoria</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to='' onClick={logout} className='flex p-2 font-medium text-red-500 hover:bg-gray-200 hover:text-red-700  rounded-md items-center gap-1'><SignOut size={17} className="icon"></SignOut>Sair</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar;