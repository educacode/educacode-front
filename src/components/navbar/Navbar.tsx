import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlert } from '../../utils/ToastAlert'
import educaLogo from "../../assets/educacode-logo2.png"

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
      <nav className="w-full bg-cyan-700 ">
      <div className="container flex justify-between py-4 items-start flex items-center">
      <div className='pl-8 logo flex items-center gap-2'>
        <img src={educaLogo} className="h-14" alt="EducaCode Logo" />
        <div className="inline-flex p-4 text-xl font-bold uppercase tracking-wider text-zinc-400">EducaCode</div>
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
              <Link to='/' className='flex px-4 py-2 font-medium text-zinc-400 hover:bg-cyan-600 hover:text-zinc-300  rounded-md'>Home</Link>
            </li>
            <li>
              <Link to='/about' className='flex px-4 py-2 font-medium text-zinc-400 hover:bg-cyan-600 hover:text-zinc-300  rounded-md'>Sobre</Link>
            </li>
            <li>
              <Link to='/contact' className='flex px-4 py-2 font-medium text-zinc-400 hover:bg-cyan-600 hover:text-zinc-300  rounded-md'>Contato</Link>
            </li>
            <li className="relative">
              <button
                onMouseEnter={toggleDropdown}
                className="flex w-full outline-none focus:outline-none px-4 py-2 font-medium text-zinc-400 hover:bg-cyan-600 hover:text-zinc-300 rounded-md"
              >
                Cursos
              </button>
              <div
                onMouseLeave={closeDropdown}
                className={`lg:absolute right-2 rounded-md p-2 bg-cyan-600 ${dropdownOpen ? "" : "hidden"} ${dropdownOpen ? 'flex' : ''}`}
              >
                <ul className="space-y-2 lg:w-48">
                  <li>
                    <Link to='/produtos' className='flex p-2 font-medium text-slate-200 hover:bg-zinc-400 hover:text-zinc-300  rounded-md '>Nossos Cursos</Link>
                  </li>
                  <li>
                    <Link to='/categorias' className='flex p-2 font-medium text-slate-200 hover:bg-zinc-400 hover:text-zinc-300  rounded-md '>Categorias</Link>
                  </li>
                  <li>
                    <Link to='/cadastroCategoria' className='flex p-2 font-medium text-slate-200 hover:bg-zinc-400 hover:text-zinc-300  rounded-md '>EducaProfe</Link>
                  </li>
                  <li>
                    <Link to='/cadastroProduto' className='flex p-2 font-medium text-slate-200 hover:bg-zinc-400 hover:text-zinc-300  rounded-md '>Seja um Parceiro</Link>
                  </li>
                  
                </ul>
              </div>
            </li>
            <li>
                  <Link to='' onClick={logout} className='flex p-2 font-medium text-zinc-400 hover:bg-zinc-400 hover:text-zinc-300  rounded-md'>Sair</Link>
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