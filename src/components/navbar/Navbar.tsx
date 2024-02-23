import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='w-full text-black bg-cyan-900'>
      <div className="container flex justify-between py-4 items-start">
        <div className='logo flex items-center'>
          <img src="https://i.imgur.com/CybAbAU.png" className="h-14" alt="EducaCode Logo" />
          <div className='text-3xl font-bold uppercase ml-2'>Educacode</div>
        </div>
        <div className='flex gap-4'>
          <div className='ml-auto flex gap-4 text-white'>
            <Link to='/login' className='hover:underline'>Login</Link>
            <Link to='/' className='hover:underline'>Home</Link>
            <Link to='/about' className='hover:underline'>Sobre</Link>
            <Link to='/contact' className='hover:underline'>Contato</Link>
            <div className='hover:underline'>Sair</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;