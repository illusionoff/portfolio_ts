import { FC, MouseEvent } from 'react';

interface ButtonProps {
  loading: boolean;
  writeMeHandler: (event: MouseEvent<HTMLButtonElement>) => Promise<void>;
}

export const Button: FC<ButtonProps> = ({ loading, writeMeHandler }) => {
  return (
    <button className='btn cyan darken-1' onClick={writeMeHandler} disabled={loading}>
      Отправить
    </button>
  );
};
