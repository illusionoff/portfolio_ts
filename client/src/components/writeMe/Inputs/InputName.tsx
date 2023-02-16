import { ChangeEvent, FC } from 'react';

interface InputNameProps {
  name: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputName: FC<InputNameProps> = ({ name, changeHandler }) => {
  return (
    <div className='input-field'>
      <input
        placeholder='Введите ваше имя'
        id='name'
        type='text'
        name='name'
        className='yellow-input validate'
        minLength={3}
        maxLength={30}
        data-length={30}
        required
        value={name}
        onChange={changeHandler}
      />
      <label htmlFor='name'>Ваше имя:</label>
      <span className='helper-text' data-error='Имя меньше трех символов или больше 30'></span>
    </div>
  );
};
