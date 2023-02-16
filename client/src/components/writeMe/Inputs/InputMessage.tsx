import { ChangeEvent, FC } from 'react';

interface InputMessageProps {
  message: string;
  changeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const InputMessage: FC<InputMessageProps> = ({ message, changeHandler }) => {
  return (
    <div className='input-field'>
      <textarea
        placeholder='Введите Сообщение'
        id='message'
        // type="text"
        name='message'
        className=' yellow-input materialize-textarea validate'
        minLength={10}
        maxLength={1000}
        data-length={1000}
        required
        value={message}
        onChange={changeHandler}
      />
      <label htmlFor='message'>Ваше сообщение:</label>
      <span className='helper-text' data-error='Сообщение меньше 10 символов или больше 1000'></span>
    </div>
  );
};
