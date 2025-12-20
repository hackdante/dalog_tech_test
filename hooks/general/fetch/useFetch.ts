import { useState, useCallback } from "react";
import { FetchStateUI } from "./interface";

export const useFetch = <T>() => {
  const [state, setState] = useState<FetchStateUI<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(async (
    url: string, 
    options?: RequestInit
  ): Promise<T | null> => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const jsonData: T = await response.json();
      
      setState({ data: jsonData, loading: false, error: null });
      return jsonData;
    } catch (e) {
      const err = e as Error;
      setState({ data: null, loading: false, error: err });
      throw err; 
    }
  }, []);

  return { ...state, execute };
};