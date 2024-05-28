import { Divider, Typography } from '@/shared/ui';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-5">
      <Image
        className="mt-auto"
        src="/assets/coin.gif"
        width="88"
        height="88"
        alt="loading"
      />
      <div className="mt-auto">
        <Typography type="body/emphasized" className="text-center px-5">
          Подожди, ничего не жми. Загружаем...
        </Typography>
        <Divider size={24} />
        <Typography className="text-center px-5" color="secondary">
          Powered by <span className="text-accent">Eddis</span>
        </Typography>
      </div>
    </div>
  );
};

export default Loading;
