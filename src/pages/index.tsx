import React from 'react';
import Sidebar from "../pages/components/Sidebar";
import { Box, Heading, Text, Flex, SimpleGrid, Image } from "@chakra-ui/react";

const MinhaPagina: React.FC = () => {
  return (
    <>
      <Box display="flex" minH="100vh" background='#252525'>
        <Sidebar />
        <Box flex="1" p="8" ml={{ base: "0", md: "280px" }}>
          <Flex direction="column" align="center">
            <Heading mb="8" textAlign="center" color='white'>Sobre</Heading>
            <SimpleGrid columns={{ base: 1, md: 1 }} spacing="8" maxW='70%'>
              <Flex alignItems="center" direction={{ base: "column", md: "row" }}>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src="https://avatars.githubusercontent.com/u/62165053"
                  alt="Gustavo Loper"
                  mr={{ base: 0, md: 6 }}
                  mb={{ base: 4, md: 0 }} />
                <Text color='white'>
                  Meu nome é Gustavo Loper, tenho 23 anos, natural de Pelotas, Rio Grande do Sul, mas atualmente resido em Morro Redondo/RS e sou Desenvolvedor Frontend Jr.
                </Text>
              </Flex>
              <Text color='white'>
                Sempre fui um apaixonado por jogos eletrônicos. Minha paixão era jogar Euro Truck Simulator 2, e com o passar dos anos me aventurei nas modelagens 3D, porém, vi que não tinha a prática para seguir nesse ramo, mas por curiosidade, comecei a fazer pequenas alterações nas configurações do jogo. Em 2018 fui em uma apresentação de cursos da Universidade Federal de Pelotas, na qual encontrei dois rapazes que falavam sobre Ciência da Computação, foi aí que despertou novamente a curiosidade pelo curso/programação.
              </Text>
              <Text color='white'>
                Em 2019, após terminar o ensino médio, fui aprovado para o curso de Engenharia de Computação na UFPEL, onde curso até os dias de hoje.
              </Text>
              <Text color='white'>
                2020 chegou, e com ele veio a Covid-19, a UFPEL entraria em um recesso forçado, no qual acreditaríamos que em 15 dias estaria tudo normalizado, mas não foi bem assim. Tinha conseguido uma vaga de serviço como Jovem Aprendiz na Lifemed Equipamentos Médicos, no setor de P&D, e não queria ficar atrasado em relação aos estudos, foi onde comecei a cursar Análise e Desenvolvimento de Sistemas no Senac Pelotas, um curso tecnólogo, que teve duração de três anos.
              </Text>
              <Text color='white'>
                Estava conseguindo conciliar bem as atividades dos três locais. E em agosto de 2022, pedi o desligamento da empresa Lifemed para me aventurar em uma empresa de desenvolvimento de software. Brainny Smart Solutions me recebeu de braços abertos e me ensinou muito sobre desenvolvimento web, utilizando linguagem de programação do tipo TypeScript, React, React Native.
              </Text>
              <Text color='white'>
                Em março de 2023, fui convidado a trabalhar na Bohr.io, uma plataforma serverless, na qual tem a finalidade de ajudar programadores a subirem seus projetos para nuvem, utilizando a linguagem de programação TypeScript e Vue.js. Onde atuo até hoje.
              </Text>
            </SimpleGrid>
          </Flex>
        </Box>
      </Box></>
  );
};

export default MinhaPagina;
