import { useState, useEffect, SetStateAction, Dispatch } from 'react';
const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>, () => void] => {
  const [value, setValue] = useState<T>(() => {
    try {
      const localValue = localStorage.getItem(key);
      return localValue
        ? JSON.parse(localValue, (key, value) => {
            if (key === 'date') return new Date(value);
            return value;
          })
        : defaultValue;
    } catch (error) {
      console.log('error reading the local storage value', error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
      throw new Error('failed to save in the local storage');
    }
  }, [key, value]);

  const clearValue = () => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
      throw new Error('failed to clear the local storage ');
    }
  };

  return [value, setValue, clearValue] as const;
};

export default useLocalStorage;
