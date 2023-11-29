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
          <h1>Musculação</h1>
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
          <h1>Jiu-jítsu</h1>
          <div>
            <p>
              O jiu-jítsu é uma arte marcial japonesa que se concentra em
              técnicas de luta no chão e estrangulamentos. É um esporte
              desafiador e altamente técnico que oferece diversos benefícios
              físicos e mentais para quem o pratica.
            </p>
            <h2>Benefícios do jiu-jítsu</h2>
            <ul>
              <li>
                <strong>Condicionamento físico:</strong> O jiu-jítsu é um
                exercício completo que melhora o condicionamento cardiovascular,
                a resistência muscular e a flexibilidade.
              </li>
              <li>
                <strong>Técnica e precisão:</strong> A prática do jiu-jítsu
                exige técnica refinada e movimentos precisos para controlar e
                finalizar o oponente.
              </li>
              <li>
                <strong>Fortalecimento muscular:</strong> As técnicas de
                alavancas e imobilizações no jiu-jítsu fortalecem os músculos do
                corpo inteiro, especialmente o core e os membros superiores.
              </li>
              <li>
                <strong>Foco e concentração:</strong> Durante os treinos e
                competições de jiu-jítsu, é necessário manter um alto nível de
                foco e concentração para aplicar as técnicas corretamente.
              </li>
              <li>
                <strong>Disciplina e autocontrole:</strong> O jiu-jítsu ensina a
                importância da disciplina, respeito e autocontrole, promovendo
                valores essenciais no desenvolvimento pessoal.
              </li>
              <li>
                <strong>Confiança e autoestima:</strong> A medida que se aprende
                e aplica as técnicas do jiu-jítsu, a confiança e a autoestima
                são aprimoradas, resultando em um maior sentimento de segurança
                em si mesmo.
              </li>
              <li>
                <strong>Estratégia e tomada de decisão:</strong> O jiu-jítsu é
                um esporte estratégico, que requer tomadas de decisão rápidas e
                eficientes durante os combates.
              </li>
            </ul>
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
