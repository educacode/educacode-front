import { FacebookLogo, InstagramLogo, LinkedinLogo, Envelope } from '@phosphor-icons/react'

function Footer() {

  return (
    <>
        <div className="flex justify-center bg-my-color-theme-3 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-2xl'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={40} weight='bold' />
              <InstagramLogo size={40} weight='bold' />
              <FacebookLogo size={40} weight='bold' />
              <Envelope size={40} weight='bold' />
            </div>
            <p className='text-xl font-bold'>Educacode &copy;</p>
          </div>
        </div>
      </>
  )
}

export default Footer