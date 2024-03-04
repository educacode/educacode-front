import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container mx-auto px-4 py-8 text-black ">
      <h2 className="text-2xl font-bold mt-4 mb-2">O que é o EducaCode?</h2>
      <p className="text-base mb-4">Em um mundo cada vez mais digital, o EducaCode surge como uma ponte de possibilidades, democratizando o acesso à educação em tecnologia e construindo um futuro digital possível a todos. Imagine um universo onde jovens de origens diversas, independentemente de suas condições socioeconômicas, podem desenvolver as habilidades necessárias para prosperar na era digital. Essa é a visão inspiradora que impulsiona o EducaCode.</p>

      <h2 className="text-2xl font-bold mt-4 mb-2">Um Modelo Inovador de Inclusão:</h2>
      <p className="text-base mb-4">O EducaCode se destaca por seu modelo inovador de doações, que coloca a inclusão social no centro de sua missão. Ao invés de doações monetárias tradicionais, nossa plataforma permite que colaboradores contribuam de forma mais direcionada, financiando cursos específicos que serão disponibilizados através de bolsas para pessoas em situação de vulnerabilidade.</p>

      <h2 className="text-2xl font-bold mt-4 mb-2">Construindo um Futuro Coletivo:</h2>
      <p className="text-base mb-4">O EducaCode acredita que a tecnologia tem o poder de transformar vidas e construir um futuro mais justo e equitativo. Através da educação, podemos empoderar pessoas de origens diversas e dar-lhes as ferramentas necessárias para alcançar seu potencial máximo.</p>

      <h2 className="text-2xl font-bold mt-4 mb-2 ">Junte-se a Nós:</h2>
      <p className="text-base mb-4">Convidamos você a fazer parte dessa jornada transformadora. Apoie o EducaCode e contribua para a construção de um futuro digital mais inclusivo. Seja um colaborador, um mentor ou um voluntário, cada ação faz a diferença. Para mais informações sobre o processo de comprovação de vulnerabilidade e como se beneficiar dos cursos gratuitos, entre em <Link to='/contact' className='hover:underline' style={{ color: 'black', fontWeight: 'bold' }}>contato conosco
      </Link>.</p>
    </div>
  );
}

export default About;