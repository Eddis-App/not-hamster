import Image from 'next/image';
import { FC } from 'react';
import { Icon } from '../icon';
import { Typography } from '../typography';

type Props = {
  src?: string;
  title?: string;
  subTitle?: string;
};

export const ListItem: FC<Props> = ({ src, title, subTitle }) => (
  <div className="flex gap-x-4 items-center py-2">
    {src && (
      <Icon className="shrink-0">
        <Image src={src} alt="crown" width="20" height="20" />
      </Icon>
    )}
    <div className="flex flex-col gap-y-1">
      <Typography type="subheadline/emphasized">{title}</Typography>
      <Typography type="subheadline" color="secondary">
        {subTitle}
      </Typography>
    </div>
  </div>
);
