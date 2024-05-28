import { Button, Divider, Input, Typography } from '@/shared/ui';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-5">
      <Typography type="headline24/emphasized">Укажи имя</Typography>
      <Divider size={8} />
      <Typography className="text-center" color="secondary">
        Оно будет использоваться в турнирной таблице и видно другим участникам
      </Typography>
      <Divider size={12} />
      <Input placeholder="Имя" />
      <Divider size={32} />
      <Link href="/onboarding/avatar">
        <Button size="big">Продолжить</Button>
      </Link>
    </div>
  );
};

export default Page;
