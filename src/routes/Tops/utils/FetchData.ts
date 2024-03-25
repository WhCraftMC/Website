import { useState, useEffect } from 'react';
import api from '../../../util/Api';

interface Data {
  ranking: number;
  name: string;
  uuid: string;
  number: number;
}

function useFetchData(pagenum: number|undefined): [Data[], boolean, number, number] {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/tops/economy?page=${pagenum}`);
        const nameResponses = await Promise.all(response.data.data.data.map((item: Data) => api.get(`/punish/getname/${item.uuid}`)));
        const names = nameResponses.map((response) => response.data.data[0].name);
        setTotalCount(response.data.data.totalCount);
        setTotalPages(response.data.data.totalPages);
        setData(response.data.data.data.map((item: Data, index: number) => ({ ...item, name: names[index] })));
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [pagenum]);

  return [data, isLoading, totalCount, totalPages];
}

export default useFetchData;
