import { Box, Heading, Flex, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import Sidebar from "../components/Sidebar";

const projects = [
  { 
    name: "Projeto 1", 
    description: "Descrição do Projeto 1", 
    imageSrcs: [
      "https://via.placeholder.com/800x400",
      "https://via.placeholder.com/800x400",
      "https://via.placeholder.com/800x400"
    ],
    linkGithub: "https://github.com/oGustavo-Loper",
    linkView: "https://github.com/oGustavo-Loper"
  },
];

const MinhaPagina: React.FC = () => {
  return (
    <Box display="flex" minH="100vh" background='#252525'>
      <Sidebar />
      <Box flex="1" p="8" ml={{ base: "0", md: "280px" }} textAlign='center'>
        <Flex direction="column" align="center">
          <Heading mb="8" textAlign="center" color='white'>Meus Projetos</Heading>
            <SimpleGrid columns={{ base: 1, md: 1 }} spacing="8">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={index}
                  name={project.name}
                  description={project.description}
                  imageSrcs={project.imageSrcs}
                  linkGithub={project.linkGithub}
                  linkView={project.linkView}
                />
              ))}
            </SimpleGrid>
        </Flex>
      </Box>
    </Box>
  );
};

export default MinhaPagina;