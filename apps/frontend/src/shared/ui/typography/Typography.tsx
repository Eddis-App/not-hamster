import { cn } from '@/shared/libs';
import { VariantProps, cva } from 'class-variance-authority';
import { FC, PropsWithChildren } from 'react';

type Props = {
  type?:
    | `${TypographyVariant}/${Extract<TypographyFormat, 'emphasized'>}`
    | TypographyVariant;
  color?: typographyVariants['color'];
  className?: string;
};

/**
 * Renders a typography component with the specified type, color, and className.
 *
 * @param {PropsWithChildren<Props>} props - The props for the Typography component.
 * @param {string} props.type - The type of typography. Defaults to 'body'.
 * @param {typographyVariants['color']} props.color - The color of the typography. Defaults to 'primary'.
 * @param {string} props.className - The additional CSS class for the typography.
 * @param {ReactNode} props.children - The content of the typography.
 * @return {JSX.Element} The rendered typography component.
 */
export const Typography: FC<PropsWithChildren<Props>> = ({
  type = 'body',
  color,
  className,
  children,
}) => {
  const [variant, format]: [
    typographyVariants['variant'],
    typographyVariants['format']
  ] = type.split('/') as TypographyType;

  return (
    <div
      className={cn(typographyStyles({ variant, format, color, className }))}
    >
      {children}
    </div>
  );
};

type typographyVariants = VariantProps<typeof typographyStyles>;
type TypographyVariant = NonNullable<typographyVariants['variant']>;
type TypographyFormat = NonNullable<typographyVariants['format']>;
type TypographyType = [TypographyVariant, TypographyFormat];

export const typographyStyles = cva('font-normal text-white', {
  variants: {
    variant: {
      headline32: 'text-[32px] leading-[40px]',
      headline28: 'text-[28px] leading-[36px]',
      headline24: 'text-[24px] leading-[32px]',
      headline18: 'text-[18px] leading-[24px]',
      body: 'text-[16px] leading-[22px]',
      subheadline: 'text-[14px] leading-[20px]',
      footnote: 'text-[13px] leading-[20px]',
      caption: 'text-[12px] leading-[20px]',
    },
    format: {
      emphasized: 'font-emphasized',
      regular: 'font-regular',
    },
    color: {
      primary: 'text-label-primary',
      secondary: 'text-label-secondary',
      tertiary: 'text-label-tertiary',
      quaternary: 'text-label-quaternary',
      inherit: 'text-inherit',
    },
  },
  compoundVariants: [
    {
      variant: 'caption',
      format: 'regular',
      className: 'font-semibold',
    },
  ],
  defaultVariants: {
    format: 'regular',
    color: 'primary',
  },
});
