import { cn } from '@/shared/libs';
import Image from 'next/image';
import { FC } from 'react';
import { Card } from '../card/Card';

type Item = {
  src: string;
  value: string;
};
type Props = {
  selected: string;
  setSelected: (value: string) => void;
  items: Item[];
};

export const CardSelector: FC<Props> = ({ selected, setSelected, items }) => {
  return (
    <div className="flex justify-center gap-2 flex-wrap">
      {items.map(({ src, value }) => (
        <Card
          key={value}
          className={cn(
            'relative transition-opacity opacity-50 border-gray-3 fill-gray-3 size-[80px]',
            selected === value && 'opacity-100'
          )}
          onClick={() => setSelected(value)}
        >
          <Image src={src} alt={value} width={80} height={80} />
          {value === selected && (
            <Image
              className="absolute -top-[10px] -right-[10px] pointer-events-none z-10"
              src="/assets/onboarding/check.svg"
              alt="check"
              width={28}
              height={28}
            />
          )}
        </Card>
      ))}
    </div>
  );
};
