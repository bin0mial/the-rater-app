import IParentPath from 'interfaces/routers/IParentPath';

const getRoutePath = (parentPath: IParentPath, target: string): string => [parentPath.index, parentPath[target]].filter(Boolean)
  .join('/');

export { getRoutePath };
