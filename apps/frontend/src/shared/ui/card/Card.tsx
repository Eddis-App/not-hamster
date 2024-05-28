import { cn } from '@/shared/libs';
import { FC, PropsWithChildren } from 'react';
import Icon from './pixel-border.svg';

type Props = {
  onClick?: () => void;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export const Card: FC<PropsWithChildren<Props>> = ({
  onClick,
  as = 'div',
  className,
  children,
}) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        'relative border-[3px] border-electric/20 fill-electric transition-all',
        className
      )}
      tabIndex={0}
      onClick={onClick}
    >
      {children}
      <div className="absolute -left-[3px] -top-[3.5px]">
        <Icon className="fill-inherit" />
        <span className="absolute bg-black w-[3px] h-[3.5px] top-0" />
      </div>
      <div className="absolute -right-[3px] -top-[3.5px]">
        <Icon className="fill-inherit rotate-90" />
        <span className="absolute bg-black w-[3px] h-[3.5px] top-0 right-0" />
      </div>
      <div className="absolute -right-[3px] -bottom-[3.5px]">
        <Icon className="fill-inherit rotate-180" />
        <span className="absolute bg-black w-[3px] h-[3.5px] bottom-0 right-0" />
      </div>
      <div className="absolute -left-[3px] -bottom-[3.5px]">
        <Icon className="fill-inherit -rotate-90" />
        <span className="absolute bg-black w-[3px] h-[3.5px] bottom-0" />
      </div>
    </Tag>
  );
};
