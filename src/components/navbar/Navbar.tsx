import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlert } from '../../utils/ToastAlert'

function Navbar() {

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
      <div className='w-full text-black bg-cyan-900'>
        <div className="container flex justify-between py-4 items-start">
          <div className='logo flex items-center'>
            <img src="https://i.imgur.com/CybAbAU.png" className="h-14" alt="EducaCode Logo" />
            <div className='text-3xl font-bold uppercase ml-2'>Educacode</div>
          </div>
          <div className='flex gap-4'>
            <div className='ml-auto flex gap-4 text-white'>
              <Link to='/home' className='hover:underline'>Home</Link>
              <Link to='/about' className='hover:underline'>Sobre</Link>
              <Link to='/contact' className='hover:underline'>Contato</Link>
              <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
              <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar;