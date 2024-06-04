import { Box, Image, Text, Flex } from "@chakra-ui/react";

interface LanguageCardProps {
  name: string;
  imageSrc: string;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ name, imageSrc }) => {
  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      alignItems="center"
      p="4"
      boxShadow="md"
    >
      <Image src={imageSrc} alt={name} boxSize="50px" mr="4" />
      <Text fontSize="lg" fontWeight="bold" color='white'>{name}</Text>
    </Flex>
  );
};

export default LanguageCard;
