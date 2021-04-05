import { useState, useCallback, FormEvent } from 'react';

const useInput = <T>(init: T): [T, (e: FormEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState(init);
  const handle = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handle];
};

export default useInput;
