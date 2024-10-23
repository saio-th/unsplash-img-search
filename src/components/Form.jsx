/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { memo } from 'react';

//スタイル
import { Button, Container, Flex, Input } from '@chakra-ui/react';

const Form = memo((props) => {
  const { keyword, setKeyword, searchPhoto, loading } = props;

  return (
    <Container
      as="form"
      className="form"
      position="sticky"
      top="0"
      zIndex="1"
      p="1em"
      bg="rgba(255, 255, 255, .8)"
      w="100%"
      maxW="initial"
    >
      <Flex justifyContent="center">
        <Input
          type="text"
          name="keyword"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Please enter keywords"
          w="md"
          borderColor="black"
          mr="8px"
        />
        <Button
          isLoading={loading}
          type="submit"
          onClick={searchPhoto}
          disabled={keyword === ''}
          bgColor="teal.400"
          color="white"
        >
          Search
        </Button>
      </Flex>
    </Container>
  );
});

export default Form;
