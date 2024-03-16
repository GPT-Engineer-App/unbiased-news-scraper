import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Image, Flex, Spacer, Button, Input, Grid, GridItem, Link } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulated API call to fetch articles
    const fetchArticles = async () => {
      const response = await fetch("https://api.example.com/articles");
      const data = await response.json();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredArticles = articles.filter((article) => article.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Box>
      <Flex bg="gray.100" p={4} alignItems="center">
        <Heading size="xl">Unbiased News</Heading>
        <Spacer />
        <Flex>
          <Input placeholder="Search articles..." mr={2} value={searchTerm} onChange={handleSearch} />
          <Button leftIcon={<FaSearch />}>Search</Button>
        </Flex>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={6} p={4}>
        {filteredArticles.map((article) => (
          <GridItem key={article.id}>
            <Box borderWidth={1} borderRadius="lg" overflow="hidden">
              <Image src={article.image} alt={article.title} />
              <Box p={4}>
                <Heading size="md" mb={2}>
                  {article.title}
                </Heading>
                <Text>{article.description}</Text>
                <Link href={article.url} isExternal mt={2} display="block">
                  Read more
                </Link>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
