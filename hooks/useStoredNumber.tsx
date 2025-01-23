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
          setNumbers(JSON.parse(storedNumbers) || []); // Default to empty array if parsing fails
        } catch (e) {
          console.error('Error parsing stored numbers', e);
          setNumbers([]); // Fallback to an empty array if parsing fails
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
    setNumbers(prevNumbers => {
      if (Array.isArray(prevNumbers)) {
        return [...prevNumbers, newNumber];
      }
      console.error('Previous numbers is not an array');
      return [newNumber]; // Fallback in case of error
    });
  };

  const resetStoredNumbers = () => {
    if (isClient) {
      localStorage.removeItem('numbers');
      setNumbers(initialValue);
    }
  };

  return [numbers, addNumber, resetStoredNumbers] as const;
};

export default useStoredNumbers;

