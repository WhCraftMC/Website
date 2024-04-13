import { useState, useEffect } from 'react';
import api from '../../../util/Api';

interface Data {
  rank: number;
  nickname: string;
  uuid: string;
  balance_data: number;
}

function useFetchData(pagenum: number|undefined, reloadnum: number|undefined): [Data[], boolean, boolean, number, number] {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/tops/economy?page=${pagenum}`);
        setTotalCount(response.data.data.totalCount);
        setTotalPages(response.data.data.totalPages);
        setData(response.data.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchData();
    // 依赖reloadnum很怪,但有效
  }, [pagenum, reloadnum]);

  return [data, isLoading, isError, totalCount, totalPages];
}

export default useFetchData;
