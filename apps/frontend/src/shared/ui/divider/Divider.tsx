import { cn } from '@/shared/libs';
import { VariantProps, cva } from 'class-variance-authority';
import { FC } from 'react';

type Props = {
  className?: string;
  size?: DividerVariant['size'];
};

export const Divider: FC<Props> = ({ size, className }) => (
  <div className={cn(divider({ size }), className)} />
);

type DividerVariant = VariantProps<typeof divider>;
const divider = cva('', {
  variants: {
    size: {
      4: 'h-[4px]',
      8: 'h-[8px]',
      12: 'h-[12px]',
      16: 'h-[16px]',
      20: 'h-[20px]',
      24: 'h-[24px]',
      28: 'h-[28px]',
      32: 'h-[32px]',
    },
  },
  defaultVariants: {
    size: 8,
  },
});
