import React from 'react';
import { 
  Container, 
  Box, 
  Grid, 
  Text, 
  Heading, 
  useColorModeValue, 
  Card, 
  CardBody, 
  Stack,
  VStack
} from '@chakra-ui/react';

const Demo = () => {
  // Get background colors and text colors from the theme based on current color mode
  const bgColor = useColorModeValue('light.background', 'dark.background');
  const textColor = useColorModeValue('light.text.primary', 'dark.text.primary');
  const cardBgColor = useColorModeValue('light.paper', 'dark.paper');
  const boxBgColor = useColorModeValue('light.secondary', 'dark.secondary');

  return (
    <Container maxW="md" mt={10} minH="100vh" bg={bgColor}>
      {/* App Bar */}
      <Box as="header" p={4} bg={boxBgColor} color={textColor}>
        <Text fontSize="lg">Home</Text>
        <Text fontSize="lg">Material</Text>
        <Text fontSize="lg">Demo</Text>
      </Box>

      {/* Paper-like Boxes */}
      <Box display="flex" gap={4} mt={6} p={4} justifyContent="space-between" flexWrap="wrap">
        <Box p={4} flex="1" bg={cardBgColor} borderRadius="md" boxShadow="md">
          <Heading size="md" color={textColor}>Box 1</Heading>
        </Box>
        <Box p={4} flex="1" bg={cardBgColor} borderRadius="md" boxShadow="md">
          <Heading size="md" color={textColor}>Box 2</Heading>
        </Box>
        <Box p={4} flex="1" bg={cardBgColor} borderRadius="md" boxShadow="md">
          <Heading size="md" color={textColor}>Box 3</Heading>
        </Box>
        <Box p={4} flex="1" bg={cardBgColor} borderRadius="md" boxShadow="md">
          <Heading size="md" color={textColor}>Box 4</Heading>
        </Box>
        
      </Box>

      {/* Card Component */}
      <Card mt={8} p={4} display="flex" flexWrap="wrap" flexDirection="row" bg={cardBgColor} color={textColor}>
        <CardBody>
          <Heading size="md">Card Component</Heading>
          <Text>Used to display content inside a structured, elevated box.</Text>
        </CardBody>
        <CardBody>
          <Heading size="md">Card Component</Heading>
          <Text>Used to display content inside a structured, elevated box.</Text>
        </CardBody>
        <CardBody>
          <Heading size="md">Card Component</Heading>
          <Text>Used to display content inside a structured, elevated box.</Text>
        </CardBody>
      </Card>
      <Stack size ="md" mt={8} p={4} bg={cardBgColor} color={textColor}>
       
        <Text>Stack Component</Text>
        <Text>Used to display content inside a structured, elevated box.</Text>
      </Stack>
      <VStack>
      <Text>Stack Component</Text>
      <Text>Used to display content inside a structured, elevated box.</Text>
      </VStack>

      {/* Grid Layout */}
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={4} mt={8}>
        <Box p={4} bg={boxBgColor} borderRadius="md" boxShadow="md">
          <Heading size="md" color={textColor}>Grid 1</Heading>
        </Box>
        <Box p={4} bg={boxBgColor} borderRadius="md" boxShadow="md">
          <Heading size="md" color={textColor}>Grid 1</Heading>
        </Box>
        <Box p={4} bg={boxBgColor} borderRadius="md" boxShadow="md">
          <Heading size="md" color={textColor}>Grid 1</Heading>
        </Box>
        <Box p={4} bg={boxBgColor} borderRadius="md" boxShadow="md">
          <Heading size="md" color={textColor}>Grid 2</Heading>
        </Box>
        <Box p={4} bg={boxBgColor} borderRadius="md" boxShadow="md">
          <Heading size="md" color={textColor}>Grid 2</Heading>
        </Box>
        <Box p={4} bg={boxBgColor} borderRadius="md" boxShadow="md">
          <Heading size="md" color={textColor}>Grid 3</Heading>
        </Box>
      </Grid>
    </Container>
  );
};

export default Demo;
