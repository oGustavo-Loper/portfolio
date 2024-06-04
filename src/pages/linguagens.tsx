import { Box, SimpleGrid, Heading, Flex } from "@chakra-ui/react";
import LanguageCard from "./components/LanguageCard";
import Sidebar from "./components/Sidebar";

const languages = [
  { name: "HTML", imageSrc: "https://imgs.search.brave.com/uYdp_mAugIFP1aLvY9mARspEn5lIZXXkA4glfSRW6Lc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy9jb21tb25z/LzYvNjEvSFRNTDVf/bG9nb19hbmRfd29y/ZG1hcmsuc3Zn.svg" },
  { name: "CSS", imageSrc: "https://imgs.search.brave.com/KpfjxEdy0K7CgGRYL2gvuVrhXVOtf6mf-VcfbEcw-jo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy9jb21tb25z/L2QvZDUvQ1NTM19s/b2dvX2FuZF93b3Jk/bWFya19zdmcuc3Zn" },
  { name: "JavaScript", imageSrc: "https://imgs.search.brave.com/B7D1tkrHWdjtScPTvSKLWjQK0N9ZefWAjmX0DRkzWb0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA0L2phdmFzY3Jp/cHQtbG9nby5wbmc" },
  { name: "TypeScript", imageSrc: "https://imgs.search.brave.com/2FW0M9sXadP75UNYUADONKDfv_F369PNLPGayhTgbMQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy9jb21tb25z/L2YvZjUvVHlwZXNj/cmlwdC5zdmcuc3Zn" },
  { name: "ReactJS", imageSrc: 'https://imgs.search.brave.com/vo6BX_XoOCp2zawTPCX6LDR7GYMp4BkOPyDkA_f-uFs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy9jb21tb25z/L2EvYTcvUmVhY3Qt/aWNvbi5zdmcuc3Zn' },
  { name: "React Native", imageSrc: 'https://imgs.search.brave.com/vo6BX_XoOCp2zawTPCX6LDR7GYMp4BkOPyDkA_f-uFs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy9jb21tb25z/L2EvYTcvUmVhY3Qt/aWNvbi5zdmcuc3Zn' },
  { name: "VueJs", imageSrc: 'https://imgs.search.brave.com/Q3Cot0jrWcFbXllRB5_5_dBPGbvi-f7fuDr4ErWjomA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1YvdnVlanMt/bG9nby0xN0Q1ODZC/NTg3LXNlZWtsb2dv/LmNvbS5wbmc' },
  { name: "C", imageSrc: 'https://imgs.search.brave.com/kbIST97wBjybu79oHpie4VbNH6CrI5nfzrMoOAS5OvQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy9jb21tb25z/LzEvMTgvQ19Qcm9n/cmFtbWluZ19MYW5n/dWFnZS5zdmcuc3Zn' },
];

const Linguagens: React.FC = () => {
  return (
    <Box display="flex" minH="100vh" background='#252525'>
      <Sidebar />
      <Box flex="1" p="8" ml={{ base: "0", md: "280px" }} textAlign='center'>
        <Flex direction="column" align="center">
          <Heading mb="8" textAlign="center" color='white'>Linguagens que Eu Sei</Heading>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="4"
            boxShadow="md"
            w='100%'
            maxW='800px'
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8">
              {languages.map((language, index) => (
                <LanguageCard key={index} name={language.name} imageSrc={language.imageSrc} />
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Linguagens;
