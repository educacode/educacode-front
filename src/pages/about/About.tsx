import { Link } from "react-router-dom";
import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react';

const devs = [
  {
    name: 'Adriano Vendramini',
    image: 'https://i.imgur.com/esUJi2I.png',
    bio: 'Entusiasta de jogos, formado em Economia e Análise e Desenvolvimento de Sistemas (ADS). Desenvolvedor FullStack apaixonado por tecnologia.',
    linkedin: 'https://www.linkedin.com/in/adriano-vendramini-23751115a/',
    github: 'https://github.com/adrivendra',
  },
  {
    name: 'Aline Freitas',
    image: 'https://i.imgur.com/BSxSKrR.png',
    bio: 'Estudante de Análise e Desenvolvimento de Sistemas, apaixonada por tecnologia e motivada por desafios que impulsionem inovação e transformação.',
    linkedin: 'https://www.linkedin.com/in/alinefsouzaa/',
    github: 'https://github.com/linefs',
  },
  {
    name: 'Gabriel Fernandez',
    image: 'https://i.imgur.com/EIxqGap.png',
    bio: 'Desenvolvedor Web FullStack, formado em Análise e Desenvolvimento de Sistemas. Entusiasta de games, mundo Tech e atividades físicas. Javeiro por teimosia e persistência. ',
    linkedin: 'https://www.linkedin.com/in/gabriel-fernandez-dev/',
    github: 'https://github.com/GabrielFernandez26',
  },
  {
    name: 'Lucas Camargo',
    image: 'https://i.imgur.com/3KuMw04.png',
    bio: 'Ex-técnico em eletrônica apaixonado por música e programações de máquinas e computadores. Atualmente Desenvolvedor FullStack.',
    linkedin: 'https://www.linkedin.com/in/lucas-lima-de-camargo/',
    github: 'https://github.com/camargollucas',
  },
  {
    name: 'Natália Oliveira',
    image: 'https://i.imgur.com/bPRVHlJ.png',
    bio: 'Desenvolvedora FullStack movida pelas conexões humanas e sua capacidade de construir um mundo melhor através da tecnologia.  Aprende e ensina sobre programação desde 2021.',
    linkedin: 'https://www.linkedin.com/in/nataliabpo/',
    github: 'https://github.com/nataliabpo',
  },
];

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-black">
      <h2 className="text-3xl font-bold mt-4 mb-2">O que é o EducaCode?</h2>
      <p className="text-lg mb-4">Em um mundo cada vez mais digital, o EducaCode surge como uma ponte de possibilidades, democratizando o acesso à educação em tecnologia e construindo um futuro digital possível a todos. Imagine um universo onde jovens de origens diversas, independentemente de suas condições socioeconômicas, podem desenvolver as habilidades necessárias para prosperar na era digital. Essa é a visão inspiradora que impulsiona o EducaCode.</p>

      <h2 className="text-2xl font-bold mt-4 mb-2">Um Modelo Inovador de Inclusão:</h2>
      <p className="text-base mb-4">O EducaCode se destaca por seu modelo inovador de doações, que coloca a inclusão social no centro de sua missão. Ao invés de doações monetárias tradicionais, nossa plataforma permite que colaboradores contribuam de forma mais direcionada, financiando cursos específicos que serão disponibilizados através de bolsas para pessoas em situação de vulnerabilidade.</p>

      <h2 className="text-2xl font-bold mt-4 mb-2">Transformando Vidas Através da Tecnologia:</h2>
      <p className="text-base mb-4">Imagine a história de Maria, uma jovem talentosa de uma comunidade carente. Apesar de sua paixão pela tecnologia, o acesso à educação formal era um sonho distante. Através do EducaCode, Maria encontrou a oportunidade que tanto buscava. Ela se inscreveu em um curso de desenvolvimento web e, com dedicação e perseverança, adquiriu as habilidades necessárias para ingressar no mercado de trabalho. Hoje, Maria trabalha como desenvolvedora em uma empresa de tecnologia, construindo uma carreira promissora e transformando sua vida e a de sua família.</p>

      <h2 className="text-2xl font-bold mt-4 mb-2">Construindo um Futuro Coletivo:</h2>
      <p className="text-base mb-4">O EducaCode acredita que a tecnologia tem o poder de transformar vidas e construir um futuro mais justo e equitativo. Através da educação, podemos empoderar pessoas de origens diversas e dar-lhes as ferramentas necessárias para alcançar seu potencial máximo.</p>

      <h2 className="text-2xl font-bold mt-4 mb-2">Junte-se a Nós:</h2>
      <p className="text-base mb-4">Convidamos você a fazer parte dessa jornada transformadora. Apoie o EducaCode e contribua para a construção de um futuro digital mais inclusivo. Seja um colaborador, um mentor ou um voluntário, cada ação faz a diferença. Para mais informações sobre o processo de comprovação de vulnerabilidade e como se beneficiar dos cursos gratuitos, entre em <Link to='/contact' className='hover:underline' style={{ color: 'black', fontWeight: 'bold' }}>contato conosco</Link>.</p>

      <div className="container mx-auto">
        <h1 className="text-3xl pt-6 font-bold mb-8">Conheça nossa equipe</h1>

        <div className="flex flex-wrap">
          {devs.map((dev, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
              <div className="text-center">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="rounded-full mx-auto h-24 w-24 mb-4"
                />
                <h2 className="text-lg font-bold mb-2">{dev.name}</h2>
                <p className="text-black">{dev.bio}</p>

                <div className="pt-5 flex mt-4 sm:items-center sm:justify-center gap-4 sm:mt-0">

                  <a href={dev.linkedin} className="hover:underline text-dark-500 hover:text-gray-300 dark:hover:text-white" target="_blank">
                    <LinkedinLogo size={30} />
                  </a>


                  <a href={dev.github} className="hover:underline text-dark-500 hover:text-gray-300 dark:hover:text-white" target="_blank">
                    <GithubLogo size={30} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;