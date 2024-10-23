/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { memo } from 'react';

//スタイル
import {
  Divider,
  Image,
  Link,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

const Results = memo((props) => {
  const { photos } = props;

  return (
    <UnorderedList
      className="photo-list"
      w="100%"
      mt="2em"
      mx="auto"
      px="1em"
      sx={{
        columnCount: { base: '2', md: '4' },
        columnGap: '2',
      }}
    >
      {photos.map((photo) => (
        <ListItem key={photo.id} className="list" display="inline-block">
          {console.log(photo.user)}
          <Link
            href={photo.links.html}
            display="block"
            position="relative"
            target="_blank"
            sx={{
              _hover: {
                transform: 'scale(1.04)',
                p: {
                  display: 'block',
                  textDecoration: 'none',
                },
                img: {
                  filter: 'auto',
                  brightness: '40%',
                },
              },
            }}
          >
            <Image src={photo.urls.regular} alt={photo.alt_description} />
            <SText>
              photographer
              <Divider w="40%" my=".3em" mx="auto" />
              <Link href={photo.user.links.html} target="_blank">
                {photo.user.name}
              </Link>
            </SText>
          </Link>
        </ListItem>
      ))}
    </UnorderedList>
  );
});

export default Results;

const SText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  color: #fff;
  font-weight: bold;
`;
