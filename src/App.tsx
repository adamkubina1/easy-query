import { Container, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { MainHeader, QueryBuilder, ResultQuery } from './components/organisms';
import { INITIAL_QUERY_STATE } from './lib/constants';
import { QueryType } from './lib/types';

function App() {
  const [query] = useState<QueryType>(INITIAL_QUERY_STATE);

  console.log(query);

  return (
    <Flex
      w={'full'}
      flexDir={'column'}
      wrap={'wrap'}
      justifyContent={'space-between'}
      minH={'100vh'}
      pt={10}
      pb={20}
    >
      <SectionContainer>
        <MainHeader />
      </SectionContainer>

      <SectionContainer>
        <QueryBuilder />
      </SectionContainer>

      <SectionContainer>
        <ResultQuery query={query} />
      </SectionContainer>
    </Flex>
  );
}

const SectionContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container w={'full'} maxW={'5xl'} centerContent>
      {children}
    </Container>
  );
};

export default App;
