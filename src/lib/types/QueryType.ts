import {
  HowExpressionType,
  TreeNode,
  WhatExpressionType,
  WhereExpressionType,
} from '.';

export type QueryType = {
  whatQuery: WhatQueryType;
  whereQuery: WhereQueryType;
  howQuery: HowQueryType;
};

export type WhatQueryType = TreeNode<string, WhatExpressionType>;

export type WhereQueryType = Array<{
  value: string;
  type: WhereExpressionType;
}>;

export type HowQueryType = Array<{ value: string; type: HowExpressionType }>;
