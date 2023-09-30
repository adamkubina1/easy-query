export type TreeNode<TValue, TType> = {
  value: TValue;
  type: TType;
  parentNode: TreeNode<TValue, TType> | null;
  childrenNodes: TreeNode<TValue, TType>[];
};
