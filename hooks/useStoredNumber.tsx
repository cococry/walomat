import { useEffect, useState } from 'react';

const useStoredNumbers = (initialValue: number[]) => {
  const [numbers, setNumbers] = useState<number[]>(initialValue);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const storedNumbers = localStorage.getItem('numbers');
      if (storedNumbers) {
        try {
          setNumbers(JSON.parse(storedNumbers) || []);
        } catch (e) {
          console.error('Error parsing stored numbers', e);
          setNumbers([]);
        }
      }
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('numbers', JSON.stringify(numbers));
    }
  }, [numbers, isClient]);

  const addNumber = (newNumber: number) => {
    setNumbers(prevNumbers => [...prevNumbers, newNumber]);
  };

  const resetStoredNumbers = () => {
    if (isClient) {
      localStorage.removeItem('numbers');
      setNumbers(initialValue);
    }
  };

  return [numbers, setNumbers, addNumber, resetStoredNumbers] as const;
};

export default useStoredNumbers;

