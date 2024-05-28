import { cn } from '@/shared/libs';
import { VariantProps, cva } from 'class-variance-authority';
import { FC, PropsWithChildren } from 'react';
import { Card } from '../card';

type Props = {
  size?: IconVariants['size'];
  className?: string;
};

export const Icon: FC<PropsWithChildren<Props>> = ({
  size,
  className,
  children,
}) => {
  return (
    <Card
      className={cn(
        icon({ size }),
        'flex items-center justify-center',
        className
      )}
    >
      {children}
    </Card>
  );
};

type IconVariants = VariantProps<typeof icon>;
const icon = cva(null, {
  variants: {
    size: {
      medium: 'size-[48px]',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
