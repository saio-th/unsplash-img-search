/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { memo } from 'react';

//スタイル
import { Button, Container, Input } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Form = memo((props) => {
  const { keyword, setKeyword, searchPhoto, loading } = props;

  return (
    <Container as="form" className="form">
      <SFlex>
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
      </SFlex>
    </Container>
  );
});

export default Form;

const SFlex = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
`;
