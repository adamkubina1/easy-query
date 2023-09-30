import {
  HowQueryType,
  WhatQueryType,
  WhereQueryType,
} from '../types/QueryType';

export const parseArrayQuery = (
  query: WhereQueryType | HowQueryType
): string => {
  return query.map((expression) => expression.value).join(' ');
};

export const parseTreeQuery = (query: WhatQueryType): string => {
  // if (!query.parentNode) return '';

  let extractedQuery = '';

  extractedQuery += ' ' + String(query.value);

  for (const childNode of query.childrenNodes) {
    extractedQuery += ' ' + parseTreeQuery(childNode);
  }

  return extractedQuery;
};
