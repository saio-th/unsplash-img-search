//スタイル
import { Box, Link, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Title = () => {
  return (
    <Box as="header">
      <SHeading as="h1">
        <Link href="/unsplash-img-search/" _hover={{ textDecoration: 'none' }}>
          Unsplash Image Serach
        </Link>
      </SHeading>
      <Text>
        By <Link href="https://unsplash.com/">Usplash</Link>
        <br />
        <Text as="span" fontSize=".8em">
          Unsplash
          APIのデモ版を使用しています。1時間毎にアクセス制限があります。
        </Text>
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
