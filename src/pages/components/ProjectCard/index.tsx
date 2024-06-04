import { Box, Image, Text, Button, Link } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProjectCardProps {
  name: string;
  description: string;
  imageSrcs: string[];
  linkGithub?: string;
  linkView?: string;
}

const ProjectCard = ({ name, description, imageSrcs = [], linkGithub, linkView }: ProjectCardProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" mb="8" w="100%" maxW="800px">
      <Slider {...settings}>
        {Array.isArray(imageSrcs) && imageSrcs.map((src, index) => (
          <Box key={index} width="100%" display="flex" justifyContent="center">
            <Image 
              src={src} 
              alt={`${name} ${index + 1}`} 
              width="100%" 
              height="auto"
              objectFit="cover"
            />
          </Box>
        ))}
      </Slider>
      <Box p="6" bg="white">
        <Text fontWeight="bold" fontSize="xl">{name}</Text>
        <Text mt="4">{description}</Text>
        <Box mt="4" display="flex" justifyContent="flex-end">
          {linkGithub && (
            <Button as={Link} href={linkGithub} colorScheme="teal" mr="2" target="_blank">GitHub</Button>
          )}
          {linkView && (
            <Button as={Link} href={linkView} colorScheme="blue" target="_blank">Ver Site</Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
