import { Box, Heading, Image, Grid, GridItem, Input, Stack, Select } from "@chakra-ui/react";

const MinhaPagina: React.FC = () => {
  return (
    <Grid templateColumns={{ base: "1fr", md: "280px 1fr" }} gap={4}>
      <Box p="4">
        <Heading size="lg" textAlign='center'>Editar Perfil</Heading>
        <Grid templateColumns="1fr" gap={4}>
          <GridItem colSpan={1}>
            <Box mx="auto" alignItems="center">
              <Image src="https://avatars.githubusercontent.com/u/62165053" alt="Gustavo Loper" borderRadius="full" boxSize="200px" my="auto" />
            </Box>
          </GridItem>

          <GridItem colSpan={1}>
            <Box mx="auto" maxW="750px">
              <Stack direction="row" spacing="4" mb="4">
                <Input variant="outline" placeholder="Nome" value="Gustavo Tessmer Loper" />
                <Input variant="outline" placeholder="Email" value="theloper7@gmail.com" />
              </Stack>

              <Stack direction="row" spacing="4">
                <Input variant="outline" placeholder="Formação" value="Analise e Desenvolvimento de Sistemas" />
                <Select placeholder="Status" isDisabled>
                  <option value="Formado" selected>Formado</option>
                  <option value="Estudando">Estudando</option>
                </Select>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Grid>
  );
};

export default MinhaPagina;