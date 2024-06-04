import { useState } from 'react';
import {
  Box, Text, VStack, Divider, useBreakpointValue, IconButton, Image,
  Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton,
  Button, Link, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody,
  Stack, Input, Select, useDisclosure, Flex, Switch,
  DrawerFooter,
  useToast
} from "@chakra-ui/react";
import { FiMenu, FiMoreHorizontal, FiX } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useRouter } from 'next/router';

const Sidebar: React.FC = () => {
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const isActive = (path: string) => router.pathname === path;

  const links = [
    { name: 'Sobre Eu', href: '/' },
    { name: 'Linguagens', href: '/linguagens' },
    { name: 'Projetos', href: '/projetos' },
  ];

  const social = [
    { name: 'Github', href: 'https://github.com/oGustavo-Loper', external: true, icon: FaGithub },
    { name: 'Instagram', href: 'https://www.instagram.com/gustavo.loper', external: true, icon: FaInstagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/gustavo-loper', external: true, icon: FaLinkedin }
  ];

  const infos = [
    {
      name: 'Gustavo Tessmer Loper',
      email: 'theloper7@gmail.com',
      formacao: [
        {
          curso: 'Analise e Desenvolvimento de Sistemas',
          universidade: 'Senac Pelotas',
          status: 'Formado',
        },
        {
          curso: 'Engenharia de Computação',
          universidade: 'Universidade Federal de Pelotas',
          status: 'Estudante',
          semestre: '5º Semestre'
        }
      ]
    }
  ];

  const toast = useToast();

  const handleSave = () => {
    toast({
      title: "Informações salvas.",
      description: "As informações foram salvas com sucesso.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    onDrawerClose();
  };

  return (
    <>
      {isMobile && (
        <IconButton
          icon={isSidebarOpen ? <FiX /> : <FiMenu />}
          aria-label="Toggle Sidebar"
          onClick={toggleSidebar}
          position="fixed"
          top="4"
          right="4"
          bg="#151515"
          color="white"
          _hover={{ bg: "gray.700" }}
          zIndex="999"
        />
      )}
      <Box
        bg="#151515"
        color="white"
        w={{ base: isSidebarOpen ? "280px" : "0", md: "280px" }}
        h="100vh"
        pt={isSidebarOpen ? "10px" : "0"}
        pb={isSidebarOpen ? "10px" : "0"}
        p={{ base: isSidebarOpen ? "20px" : "0", md: "20px" }}
        position='fixed'
        top="0"
        left="0"
        zIndex="998"
        overflow="hidden"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        transition="width 0.3s, padding 0.3s"
      >
        <VStack spacing="4" align="flex-start" flex="1">
          <Box w='245px'>
            <Text fontSize='xl' fontWeight='bold' textAlign='center' marginBottom='25px'>Meu Portfólio</Text>
            <Text fontSize="14px" fontWeight="bold">Conhecimentos</Text>
            {links.map((link) => (
              <Box key={link.name} margin='0px 10px 0px 10px'>
                <Link href={link.href} target='_self'>
                  <Box
                    as="span"
                    p="2"
                    bg={isActive(link.href) ? "#252525" : "transparent"}
                    color={isActive(link.href) ? "white" : "gray.200"}
                    _hover={{ bg: "#252525", color: "white" }}
                    display="block"
                    fontWeight={isActive(link.href) ? "bold" : "normal"}
                  >
                    {link.name}
                  </Box>
                </Link>
              </Box>
            ))}
            <Text fontSize="14px" fontWeight="bold">Social</Text>
            {social.map((social) => (
              <Box key={social.name} margin='0px 10px 0px 10px'>
                <Link href={social.href} target='_blank'>
                  <Box
                    as="span"
                    p="2"
                    bg={isActive(social.href) ? "#252525" : "transparent"}
                    color={isActive(social.href) ? "white" : "gray.200"}
                    _hover={{ bg: "#252525", color: "white" }}
                    display="flex"
                    alignItems="center"
                    fontWeight={isActive(social.href) ? "bold" : "normal"}
                  >
                    <social.icon style={{ marginRight: '8px' }} />
                    {social.name}
                  </Box>
                </Link>
              </Box>
            ))}
          </Box>
        </VStack>
        <Box mt="auto">
          <Box display="flex" alignItems="center">
            <Image src='https://avatars.githubusercontent.com/u/62165053' alt="Gustavo Loper" borderRadius="full" boxSize="40px" mr="4" />
            <VStack alignItems="flex-start" gap={0}>
              <Text fontSize={18} fontWeight='bold'>{infos[0].name}</Text>
              <Text fontSize={14}>Frontend Developer</Text>
            </VStack>
            <Popover isLazy>
              <PopoverTrigger>
                <IconButton icon={<FiMoreHorizontal />} aria-label="Mais Opções" variant="ghost" />
              </PopoverTrigger>
              <PopoverContent w="105px" h="35px">
                <PopoverArrow />
                <PopoverCloseButton />
                <Button onClick={onDrawerOpen}>Editar Perfil</Button>
              </PopoverContent>
            </Popover>
          </Box>
        </Box>

        <Drawer isOpen={isDrawerOpen} placement="right" size='sm' onClose={onDrawerClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
              Editar Perfil
              <Switch ml="4" isChecked={isEditMode} onChange={toggleEditMode} />
            </DrawerHeader>
            <DrawerBody>
              <Stack spacing="4">
                <Box textAlign="center">
                  <Image src="https://avatars.githubusercontent.com/u/62165053" alt="Gustavo Loper" borderRadius="full" boxSize="150px" mx="auto" mb="4" />
                </Box>
                {isEditMode ? (
                  <>
                    <Input variant="outline" placeholder="Nome" value={infos[0].name}/>
                    <Input variant="outline" placeholder="Email" value={infos[0].email} />
                    {infos[0].formacao.map((formacao, index) => (
                      <Stack key={index} direction="row" spacing="4">
                        <Input variant="outline" placeholder="Curso" value={formacao.curso} />
                        <Input variant="outline" placeholder="Universidade" value={formacao.universidade} />
                        <Select placeholder="Status" value={formacao.status}>
                          <option value="Formado">Formado</option>
                          <option value="Estudante">Estudante</option>
                        </Select>
                        {formacao.semestre && (
                          <Input variant="outline" placeholder="Semestre" value={formacao.semestre} />
                        )}
                      </Stack>
                    ))}
                   <DrawerFooter borderTopWidth='1px'>
                    <Button variant='outline' mr={3} onClick={onDrawerClose}>
                      Cancelar
                    </Button>
                    <Button colorScheme='blue' onClick={handleSave}>Salvar</Button>
                 </DrawerFooter>
                  </>
                ) : (
                  <>
                    <Flex alignItems="left" marginTop="10px">

                      <Text color="#5f5f5f" fontSize="16px" fontWeight="bold">
                        Nome: {infos[0].name}
                      </Text>
                    </Flex>
                    <Flex alignItems="left" marginTop="10px">
                      <Text color="#5f5f5f" fontSize="16px" fontWeight="bold">
                        Email: {infos[0].email}
                      </Text>
                    </Flex>
                    {infos[0].formacao.map((formacao, index) => (
                      <Flex alignItems="left" marginTop="10px" key={index}>
                        <Text color="#5f5f5f" fontSize="16px" fontWeight="bold">
                          {formacao.status} {formacao.semestre ? `de` : 'em'} {formacao.curso} pela(o) {formacao.universidade} {formacao.semestre}
                        </Text>
                      </Flex>
                    ))}
                  </>
                )}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
