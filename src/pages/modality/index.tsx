import { useState, useEffect } from 'react';
import { Card } from './style';
import './style.css';

import bg_modalidade_jiu from '../../assets/images/bg_modalidade_jiu.png';
import bg_modalidade_kick from '../../assets/images/bg_modalidade_kick.png';
import { Button } from '../../components/button';

function Modality() {
  const [step, SetStep] = useState<number>(0);

  useEffect(() => {
    console.log(`step: ${step}`);
  }, [step]);

  return (
    <>
      {step === 0 && (
        <aside className="modality group">
          <Card onClick={() => SetStep(1)}>
            <p>AERÓBICA</p>
            <img src={bg_modalidade_kick} alt="modalidade de musculação" />
          </Card>
          <Card onClick={() => SetStep(2)}>
            <p>MUSCULAÇÃO</p>
            <img src={bg_modalidade_jiu} alt="modalidade de AERÓBICA" />
          </Card>
        </aside>
      )}

      {step === 1 && (
        <aside className="modality kick">
          <h1>Aeróbica</h1>
          <div>
            <p>
              A Ginástica Aeróbica é uma modalidade onde se executam padrões de movimentos aeróbicos complexos,
               de forma continuada e com alta intensidade, originários da dança aeróbica tradicional, 
               utilizando a estrutura e o estilo da música, e interpretando-a.Padrões de Movimentos 
               Aeróbicos são a combinação simultânea de passos básicos e movimentos de braços executados
               de forma consecutiva, respeitando a característica da música para assim criar sequências dinâmicas, 
               rítmicas e contínuas, de movimentos de alto e baixo impacto.
               A rotina (coreografia) deve demonstrar movimentos contínuos, flexibilidade, força, agilidade e equilíbrio,
               além de utilizar os sete passos básicos e elementos de dificuldade com alto nível de perfeição.
               O ginasta deve apresentar-se de forma cativante e alegre, porém com naturalidade, sem expressões faciais exageradas.
            </p>

            <p>
            É composta por 7 Passos Básicos e 4 Grupos de Elementos de Dificuldade, além de elevações, transições e ligações entre os movimentos.
             A duração total da coreografia é de 1 minuto e 45 segundos.
             Os 7 Passos Básicos da GAE são:MarchaJogging (Corrida)ChutinhoChute AltoPolichineloElevações de JoelhoLunge (A Fundo)
             Os 4 Grupos de Elementos de Dificuldade são:Força Dinâmica:
             Ex. Flexões de Braços, Cortadas, Círculos de Pernas.Força Estática: Ex. Esquadros, Pranchas.Saltos: Ex. Grupado, Afastado, Carpado, Cortado, Tesoura.Flexibilidade e Equilíbrio: Ex. Espacatos, Giros, Pegadas
            </p>

              
            
          </div>
          <Button
            text="Voltar"
            handle={() => SetStep(0)}
            bg="white"
            color="#222727"
            size="100px"
            font="18px"
          />
        </aside>
      )}

      {step === 2 && (
        <aside className="modality jiu">
          <h1>Musculução</h1>
          <div>
            <p>
            É a modalidade que visa o treinamento e desenvolvimento dos músculos. 
             Utiliza aparelhos, barras, halteres, pesos livres ou o peso do próprio corpo e pode ser 
             direcionada para os mais variados objetivos, aumentar ou definir a musculatura, 
             prevenir lesões e até no tratamento de doenças musculares, ósseas, metabólicas e melhoria na mobilidade e postura. 
             Adequando as cargas e as intensidades dos exercícios para cada pessoa, com base na sua idade, peso, sexo e histórico
             em atividade física, esta forma de treinamento aumenta o gasto calórico, o ganho de massa magra e acelera o metabolismo, 
             fazendo o corpo funcionar de maneira mais eficiente.
            </p>
            <p>
            Os benefícios da musculação são: eliminação da gordura, aumento da massa muscular, aumento da força muscular, melhora a atividade cardíaca, 
             a postura, a auto-estima, o sono, o bem-estar, os quadros de depressão, aumenta a resistência do sistema imunológico. Ameniza a celulite, 
             pois o exercício com peso evita a flacidez e define os músculos.
            </p>

            <p>
            Para mulheres, por exemplo, é uma ótima aliada contra a osteoporose e alivia sintomas da TPM por causa da liberação de endorfinas e outros hormônios
             responsáveis pelo bem-estar. Além disso, do ponto de vista estético, o maior destaque vai para o ganho de resistência e de massa muscular, 
             caso seu treino seja voltado para hipertrofia (desenvolvimento dos músculos).
            </p>
          </div>
          <Button
            text="Voltar"
            handle={() => SetStep(0)}
            bg="white"
            color="#222727"
            size="100px"
            font="18px"
          />
        </aside>
      )}
    </>
  );
}

export default Modality;
