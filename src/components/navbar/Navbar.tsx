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
          <div className='pl-8 logo flex items-center gap-2'>
            <img src="https://i.imgur.com/CybAbAU.png" className="h-14" alt="EducaCode Logo" />
            <div className='text-3xl font-bold uppercase ml-2'>Educacode</div>
          </div>
          <div className='flex gap-4'>
            <div className='ml-auto flex gap-5 text-white'>
              <Link to='/home' className='hover:underline'>Home</Link>
              <Link to='/about' className='hover:underline'>Sobre</Link>
              <Link to='/contact' className='hover:underline'>Contato</Link>
              <Link to='/produtos' className='hover:underline'>Ver produtos</Link>
              <Link to='/categorias' className='hover:underline'>Categorias</Link>
              <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar nova categoria</Link>
              <Link to='/cadastroProduto' className='hover:underline'>Cadastrar novo produto</Link>
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