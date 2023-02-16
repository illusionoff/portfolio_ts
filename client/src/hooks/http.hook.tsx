import { useState, useCallback } from 'react';
import axios, { AxiosError } from 'axios';
import { IMessageRequest, IRequestParams } from '../models';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const request = useCallback(async ({ url, body = null }: IRequestParams) => {
    setLoading(true);
    try {
      const response = await axios.post<IMessageRequest>(url, body);
      const data = response.data;
      setLoading(false);
      return data;
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }, []);

  const clearError = useCallback(() => setError(''), []);

  return { loading, request, error, clearError };
};
