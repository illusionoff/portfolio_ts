import { useState, useEffect, FC } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { useMessage } from '../../hooks/message.hook';
import { IForm } from '../../models';
import { Button } from './button/Button';
import { InputMessage } from './Inputs/InputMessage';
import { InputName } from './Inputs/InputName';

export const WriteMe: FC = () => {
  const messageRequest = useMessage();
  const { loading, error, request, clearError } = useHttp();

  const [form, setForm] = useState<IForm>({
    name: '',
    message: '',
  });

  useEffect(() => {
    messageRequest(error);
    clearError();
  }, [error, messageRequest, clearError]);

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const changeHandler = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const writeMeHandler = async (): Promise<void> => {
    try {
      if (form) {
        const dataObj = { url: '/api/message', method: 'post', body: { ...form } };
        const data = await request(dataObj);
        if (!data) return messageRequest('Что-то пошло не так');
        messageRequest(data.message);
      }
    } catch (e) {
      console.log(e);
      messageRequest('Что-то пошло не так');
    }
  };

  return (
    <>
      <div>
        <h3 className='page-title white-text'>Write to me</h3>
        <div className='container'>
          <div className='card  blue darken-1 black-text'>
            <div className='card-content white-text'>
              <span className='card-title'>Отправить мне сообщение</span>
              <div>
                <InputName name={form.name} changeHandler={changeHandler} />
                <InputMessage message={form.message} changeHandler={changeHandler} />
              </div>
            </div>
            <div className='card-action'>
              <Button loading={loading} writeMeHandler={writeMeHandler} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
