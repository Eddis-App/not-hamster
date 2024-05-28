import { cn } from '@/shared/libs';
import { FC } from 'react';
import { Card } from '../card';
import { Typography } from '../typography';

type Props = {
  error?: string;
} & JSX.IntrinsicElements['input'];

export const Input: FC<Props> = ({ error, className, ...restProps }) => {
  const hasError = !!error;

  return (
    <Card
      className={cn(
        'flex flex-col gap-y-2 w-full bg-electric/15 h-[56px] active:opacity-50 focus-within:border-electric transition-all',
        hasError && 'bg-red/15 fill-red border-red/20 focus-within:border-red',
        className
      )}
      as="label"
    >
      <input
        type="text"
        className={cn(
          'shrink-0 h-full w-full outline-none bg-inherit text-[18px] leading-[24px] font-emphasized text-label-primary placeholder:text-label-secondary text-center'
        )}
        {...restProps}
      />

      {error && <Typography className="text-red">{error}</Typography>}
    </Card>
  );
};
