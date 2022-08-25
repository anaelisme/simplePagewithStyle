import { useEffect, useRef } from "react";
/**
 *
 * @param value Hook to get previous prop value
 * @returns
 */
export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
