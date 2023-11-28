import bg_quemsomos from '../../assets/images/bg_quemsomos_v2.png';
import './style.css';

function About() {
  return (
    <aside className="about">
      <div>
        <p>
        Bem-vinda à GymWoman, um espaço dedicado exclusivamente ao bem-estar 
        e à saúde da mulher. Nossa missão é proporcionar um ambiente acolhedor, motivador e seguro, 
        onde as mulheres possam se sentir empoderadas para alcançar seus objetivos de saúde e fitness.
       </p>
        <p>
          Fundada em 2022, a Academia GymWoman surgiu da visão de promover um lugar único,
           projetado para atender às necessidades específicas das mulheres em sua jornada de condicionamento físico. 
           Inspiradas pela ideia de criar uma comunidade que celebra a força, a determinação e a diversidade feminina, 
           nossas fundadoras estabeleceram um espaço onde as mulheres podem se sentir verdadeiramente à vontade 
           para perseguir seus objetivos de forma saudável e sustentável.
        </p>
        <p>
         Acreditamos que cada mulher é única, com metas e desafios individuais.
         Na Academia Mulher Ativa, adotamos uma abordagem holística para a saúde, concentrando-nos não apenas no condicionamento físico,
         mas também no bem-estar mental e emocional. Valorizamos a importância do equilíbrio entre o corpo e a mente, 
         oferecendo uma variedade de programas e serviços que atendem às diferentes necessidades de nossas membros.
        </p>
        <p>
        Em nosso espaço moderno e acolhedor, oferecemos uma variedade de equipamentos de última geração, salas de treinamento funcional,
        aulas especializadas e espaços dedicados para atividades como ioga e meditação. 
        Nosso ambiente foi projetado para promover a energia positiva e a camaradagem, incentivando todas as mulheres a se sentirem confortáveis e confiantes em sua jornada de fitness.
        </p>
        <p>
        Contamos com uma equipe dedicada de profissionais qualificados, incluindo instrutores, 
        treinadores pessoais e especialistas em saúde, todos comprometidos em apoiar e orientar cada membro individualmente. 
        Nossa equipe compreende as necessidades específicas das mulheres em diferentes estágios da vida,
        adaptando nossos programas para atender a diversas idades, níveis de condicionamento físico e objetivos.
        </p>
        <p>
        Ao se tornar parte da Academia GymWoman,você não está apenas aderindo a um programa de exercícios,
        mas se tornando parte de uma comunidade vibrante de mulheres que se apoiam mutuamente. 
        Organizamos eventos sociais, workshops educativos e desafios que fortalecem os laços entre nossas membros, criando uma atmosfera inspiradora e motivadora.
        Na Academia Mulher Ativa, estamos comprometidas em ajudar cada mulher a descobrir sua força interior, 
        alcançar seus objetivos de forma saudável e se tornar a melhor versão de si mesma. Junte-se a nós nessa jornada incrível para uma vida mais ativa, equilibrada e plena!
        </p>
      </div>
      <img src={bg_quemsomos} alt="quem somos" />
    </aside>
  );
}

export default About;
