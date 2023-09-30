import { Heading } from '@chakra-ui/react';

export const MainHeader = () => {
  return (
    <>
      <Heading as={'h1'} fontSize={'6xl'}>
        Easy query
      </Heading>
      <Heading fontSize={'2xl'}>Google search query generator</Heading>
    </>
  );
};
