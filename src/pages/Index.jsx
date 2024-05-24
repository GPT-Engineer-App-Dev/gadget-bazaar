import { Box, Container, VStack, Text, Heading, Image, SimpleGrid, Link, Flex, Spacer, HStack, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" padding={4} alignItems="center">
        <Heading as="h1" size="lg">
          <RouterLink to="/">ElectroShop</RouterLink>
        </Heading>
        <Spacer />
        <HStack spacing={8}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/products">Products</Link>
          <Link as={RouterLink} to="/about">About Us</Link>
          <Link as={RouterLink} to="/contact">Contact Us</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" padding={10} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="lg" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Product Listing Section */}
      <Container maxW="container.xl" py={10}>
        <Heading as="h3" size="lg" mb={6}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {/* Example Product */}
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product Image" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Product Name</Heading>
              <Text fontSize="lg" color="gray.600">$199.99</Text>
            </Box>
          </Box>
          {/* Add more products as needed */}
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box>
              <Heading as="h4" size="md" mb={4}>ElectroShop</Heading>
              <Text>1234 Electronics Ave, Tech City, TX 12345</Text>
              <Text>Email: support@electroshop.com</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>Follow Us</Heading>
              <HStack spacing={4}>
                <Link href="https://facebook.com" isExternal><FaFacebook size="24px" /></Link>
                <Link href="https://twitter.com" isExternal><FaTwitter size="24px" /></Link>
                <Link href="https://instagram.com" isExternal><FaInstagram size="24px" /></Link>
              </HStack>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>Quick Links</Heading>
              <VStack align="start">
                <Link as={RouterLink} to="/">Home</Link>
                <Link as={RouterLink} to="/products">Products</Link>
                <Link as={RouterLink} to="/about">About Us</Link>
                <Link as={RouterLink} to="/contact">Contact Us</Link>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;