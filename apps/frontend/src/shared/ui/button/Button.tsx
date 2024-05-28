import { cn } from '@/shared/libs';
import { VariantProps, cva } from 'class-variance-authority';
import { FC } from 'react';
import { Card } from '../card';
import { Typography } from '../typography';

type Props = {
  variant?: ButtonVariant['variant'];
  disabled?: ButtonVariant['disabled'];
  size?: ButtonVariant['size'];
} & JSX.IntrinsicElements['button'];

export const Button: FC<Props> = ({
  variant,
  size,
  disabled,
  className,
  children,
  ...restProps
}) => {
  return (
    <Card className={cn(card({ variant }), className)}>
      <button
        className={button({
          variant: disabled ? null : variant,
          size,
          disabled,
        })}
        disabled={disabled}
        {...restProps}
      >
        <Typography color="inherit" type="body/emphasized">
          {children}
        </Typography>
      </button>
    </Card>
  );
};

type ButtonVariant = VariantProps<typeof button>;
const card = cva('transition-all', {
  variants: {
    variant: {
      primary: 'fill-accent border-accent active:opacity-50',
    },
    disabled: {
      true: 'fill-tertiary',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

const button = cva('flex justify-center items-center', {
  variants: {
    variant: {
      primary: 'bg-accent text-gray-black',
    },
    size: {
      big: 'min-w-[148px] h-[48px]',
      medium: 'min-w-[140px] h-[40px]',
    },
    disabled: {
      true: 'bg-fill-tertiary text-label-tertiary',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});
