import homeLogo from "../../assets/home.png"
function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-cyan-500">
      <div className="container grid grid-cols-2 text-black ">
        <div className="flex flex-col gap-4 items-center justify-center py-4 ">
          <h2 className="text-5xl font-bold text-slate-200">Bem-vindo ao EducaCode</h2>
          <p className="text-xl font-bold text-slate-300 p-4 break-all">Construindo pontes para um futuro digital possível para todos</p>
         
        </div>

        <div className="flex justify-center">
          <img src={homeLogo} alt="" className='w-2/3' /> 
        </div>
      </div>
    </div>
  );
}

export default Home;