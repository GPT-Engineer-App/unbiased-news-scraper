import React from "react";
import { Box, Flex, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.200" py={4}>
      <Flex maxW="container.lg" mx="auto" align="center">
        <Link as={RouterLink} to="/" fontWeight="bold" fontSize="xl">
          Unbiased News
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/world" mr={4}>
          World
        </Link>
        <Link as={RouterLink} to="/politics" mr={4}>
          Politics
        </Link>
        <Link as={RouterLink} to="/business" mr={4}>
          Business
        </Link>
        <Link as={RouterLink} to="/technology" mr={4}>
          Technology
        </Link>
        <Link as={RouterLink} to="/health" mr={4}>
          Health
        </Link>
        <Link as={RouterLink} to="/entertainment" mr={4}>
          Entertainment
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
