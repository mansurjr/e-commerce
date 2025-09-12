import { useEffect, useState } from "react";
import { api } from "../api";
import type { AxiosError, AxiosResponse } from "axios";

interface IParams {
  limit?: number;
  page?: number;
  skip?: number;
}

export const useFetch = <T = unknown>(endpoint: string, params?: IParams) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    api
      .get<T>(endpoint, { params })
      .then((res: AxiosResponse<T>) => setData(res.data))
      .catch((err: AxiosError) => setError(err))
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint, JSON.stringify(params)]);

  return { data, error, loading };
};
