import { QueryType } from './types';

export const INITIAL_QUERY_STATE: QueryType = {
  whatQuery: {
    parentNode: null,
    childrenNodes: [],
    type: 'Root',
    value: '',
  },
  whereQuery: [],
  howQuery: [],
};
