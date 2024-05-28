'use client';

import { Button, Divider, Typography } from '@/shared/ui';
import { CardSelector } from '@/shared/ui/card-selector/CardSelector';
import Link from 'next/link';
import { useState } from 'react';

const items = [
  {
    src: '/assets/basic.png',
    value: 'basic',
  },
  {
    src: '/assets/glasses.png',
    value: 'glasses',
  },
  {
    src: '/assets/cigarette.png',
    value: 'cigarette',
  },
  {
    src: '/assets/futuristic.png',
    value: 'futuristic',
  },
  {
    src: '/assets/sport.png',
    value: 'sport',
  },
];

const Page = () => {
  const [selected, setSelected] = useState('basic');

  return (
    <div className="h-full flex flex-col items-center justify-center p-5">
      <Typography type="headline24/emphasized">Выбери аватар</Typography>
      <Divider size={8} />
      <Typography className="text-center" color="secondary">
        Как и имя, оно будет отображаться в турнирной таблице
      </Typography>
      <Divider size={12} />
      <CardSelector
        selected={selected}
        setSelected={setSelected}
        items={items}
      />
      <Divider size={32} />
      <Link href="/onboarding/hello">
        <Button size="big">Продолжить</Button>
      </Link>
    </div>
  );
};

export default Page;
