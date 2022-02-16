import { useCallback } from 'react';


export const useMessage = () => {
  return useCallback(text => {
    if (window.M && text) {
      if (text.includes(',')) {
        console.log('include ,')
        text = text.replaceAll(',', '<br>');
      }
      window.M.toast({ html: text });
    }
  }, [])
}