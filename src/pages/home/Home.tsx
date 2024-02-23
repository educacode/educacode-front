function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-cyan-700">
      <div className="container grid grid-cols-2 text-black">
        <div className="flex flex-col gap-4 items-center justify-center py-4">
          <h2 className="text-5xl font-bold">Bem-vindo ao Educacode</h2>
          <p className="text-xl">Construindo pontes para um futuro digital possível para todos.</p>
          <div className="flex justify-around gap-4">
            {/* Seu conteúdo adicional aqui */}
          </div>
        </div>

        <div className="flex justify-center">
          {/* <img src={homeLogo} alt="" className='w-2/3' /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;