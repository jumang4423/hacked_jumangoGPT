import { IconDots } from '@tabler/icons-react';
import { FC } from 'react';

interface Props {}

export const ChatLoader: FC<Props> = () => {
  return (
    <div className="group rounded-lg p-4" style={{ overflowWrap: 'anywhere' }}>
      <div className="m-auto flex gap-4 bg-green-500 p-4 text-base md:max-w-2xl md:gap-6 md:py-6 lg:max-w-5xl lg:px-0 xl:max-w-5xl ">
        <div className="min-w-[40px] text-right font-bold">
          {'thinking...'.repeat(100)}
        </div>
        <IconDots className="animate-pulse" />
      </div>
    </div>
  );
};
