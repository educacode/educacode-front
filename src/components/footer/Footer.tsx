import { FacebookLogo, InstagramLogo, LinkedinLogo, Envelope, GithubLogo } from '@phosphor-icons/react';

function Footer() {
  const github = "https://github.com/educacode";

  return (
    <>
      <div className="flex justify-center text-black bg-cyan-900">
        <div className="container flex flex-col items-center py-8">
          <a href={github} className="flex items-center mb-4 space-x-3">
            <img src="https://i.imgur.com/CybAbAU.png" className="h-7" alt="Educacode Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">EducaCode™</span>
          </a>
          <ul className="flex flex-wrap items-center mb-3 text-sm font-medium">
            <li>
              <a href="#" className="hover:underline px-4 py-2">Sobre Nós</a>
            </li>
            <li>
              <a href="#" className="hover:underline px-4 py-2">Contato</a>
            </li>
            <li>
              <a href="#" className="hover:underline px-4 py-2">Apoie</a>
            </li>
          </ul>
          <p className='text-sm mb-4'>Acesse nossas redes sociais</p>
          <div className='flex gap-3'>
            <a href={github} className="hover:underline" target="_blank"><LinkedinLogo size={35} weight='light' /></a>
            <a href={github} className="hover:underline" target="_blank"><InstagramLogo size={35} weight='light' /></a>
            <a href={github} className="hover:underline" target="_blank"><FacebookLogo size={35} weight='light' /></a>
            <a href={github} className="hover:underline" target="_blank"><GithubLogo size={35} weight='light' /></a>
            <a href="mailto:projetoi225@gmail.com" className="hover:underline" target="_blank"><Envelope size={35} weight='light' /></a>

          </div>
          <span className="block text-sm sm:text-center mt-4">&copy; 2024 <a href={github} className="hover:underline">EducaCode™</a> </span>
        </div>
      </div>
    </>
  );
}

export default Footer;