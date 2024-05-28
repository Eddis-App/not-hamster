import { FC, PropsWithChildren } from 'react';
import { ListItem } from './ListItem';

export const List: FC<PropsWithChildren> & {
  Item: typeof ListItem;
} = ({ children }) => {
  return <div className="flex flex-col gap-y-3 ">{children}</div>;
};

List.Item = ListItem;
