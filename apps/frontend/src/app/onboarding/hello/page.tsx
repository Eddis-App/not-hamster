import { Button, Divider, List, Typography } from '@/shared/ui';
import Link from 'next/link';

const wait = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));
const Page = async () => {
  await wait(3000);
  return (
    <div className="h-full flex flex-col items-center justify-center p-5">
      <Typography type="headline24/emphasized">Привет!</Typography>
      <Divider size={8} />
      <Typography className="text-center">
        Начни с нуля и стань китом, который двигает рынок
      </Typography>
      <Divider size={24} />
      <List>
        <List.Item
          src="/assets/onboarding/crown.svg"
          title="Ищи прибыльные активы"
          subTitle="Покупай на ямках, продавай на горках"
        />
        <List.Item
          src="/assets/onboarding/emerald.svg"
          title="Увеличивай капитал"
          subTitle="Используй свою стратегию. Или нет?"
        />
        <List.Item
          src="/assets/onboarding/trophy.svg"
          title="Побеждай"
          subTitle="13 мая топ-3 игрока получат NFT на свой кошелек"
        />
      </List>
      <Divider size={32} />
      <Link href="/onboarding/username">
        <Button size="big">Продолжить</Button>
      </Link>
    </div>
  );
};

export default Page;
