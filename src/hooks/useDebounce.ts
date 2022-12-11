import { useEffect, useState } from 'react'

export const useDebounce = <T>(
  value: T | number[],
  delay?: number,
): T | number[] => {
  const [debouncedValue, setDebouncedValue] = useState<T | number[]>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
