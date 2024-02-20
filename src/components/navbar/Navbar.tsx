import { Link, useNavigate } from 'react-router-dom'
import logoEducacode from '../../assets/educacode-logo.png'
import './Navbar.css'
function Navbar() {

    return (
        <>
            <div className='w-full bg-my-color-theme-3 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <div className='logo flex'>
                        <img src={logoEducacode} alt="Logo do Educacode" className='logo-image'/>
                        {/* <div className='text-2xl font-bold uppercase'>Educacode</div> */}
                        <div className='text-2xl font-bold uppercase flex items-center'>Educacode</div>
                    </div>
                    <div className='flex gap-4'>
                        <Link to='/' className='hover:underline'>Home</Link>
                        <Link to='/about' className='hover:underline'>Sobre</Link>
                        <Link to='/contact' className='hover:underline'>Contato</Link>
                        <div className='hover:underline'>Sair</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar