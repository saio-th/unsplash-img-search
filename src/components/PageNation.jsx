/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { memo } from 'react';

//スタイル
import { Button, Flex, Text } from '@chakra-ui/react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const PageNation = memo((props) => {
  const {
    pageCount,
    totalPage,
    decrementPageCount,
    incrementPageCount,
    topPageCount,
    lastPageCount,
    loading,
  } = props;

  return (
    <>
      <Text mt="2em">
        {pageCount} / {totalPage}
      </Text>
      <Flex justifyContent="center" mt="1em" gap="1em">
        {pageCount > 1 && (
          <>
            <Button
              bgColor="transparent"
              color="teal.400"
              leftIcon={<SlArrowLeft />}
              onClick={topPageCount}
              isLoading={loading}
            >
              TOP
            </Button>
            <Button
              bgColor="teal.400"
              color="white"
              onClick={decrementPageCount}
              isLoading={loading}
            >
              PREV
            </Button>
          </>
        )}

        {pageCount < totalPage && (
          <>
            <Button
              bgColor="teal.400"
              color="white"
              onClick={incrementPageCount}
              isLoading={loading}
            >
              NEXT
            </Button>
            <Button
              bgColor="transparent"
              color="teal.400"
              rightIcon={<SlArrowRight />}
              onClick={lastPageCount}
              isLoading={loading}
            >
              LAST
            </Button>
          </>
        )}
      </Flex>
    </>
  );
});

export default PageNation;
