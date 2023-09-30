import { Code, HStack, Heading, Stack } from '@chakra-ui/react';
import { QueryType } from '../../lib/types';
import { parseArrayQuery, parseTreeQuery } from '../../lib/utils';

export const ResultQuery = ({ query }: { query: QueryType }) => {
  return (
    <HStack>
      <Heading fontSize={'xl'}>Result</Heading>
      <Stack flexDir={{ base: 'column', md: 'row' }}>
        <Code children={parseTreeQuery(query.whatQuery)} />
        <Code colorScheme='red' children={parseArrayQuery(query.whereQuery)} />
        <Code colorScheme='yellow' children={parseArrayQuery(query.howQuery)} />
      </Stack>
    </HStack>
  );
};
