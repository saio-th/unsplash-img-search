//スタイル
import { Box, Link, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Title = () => {
  return (
    <Box as="header">
      <SHeading as="h1">
        <Link href="/" _hover={{ textDecoration: 'none' }}>
          Unsplash Image Serach
        </Link>
      </SHeading>
      <Text>
        By <Link href="https://unsplash.com/">Unsplash</Link>
      </Text>
    </Box>
  );
};

export default Title;

const SHeading = styled.h1`
  font-family: 'Roboto', sans-serif !important;
  font-weight: bold;
  font-size: 32px;
`;
