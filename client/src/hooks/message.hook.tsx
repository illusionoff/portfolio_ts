import { useCallback } from 'react';

export const useMessage: any = (): ((text: string) => void) => {
  return useCallback((text: string): void => {
    if (window.M && text) {
      if (text.includes(',')) {
        text = text.replaceAll(',', '<br>');
      }
      window.M.toast({ html: text });
    }
  }, []);
};
