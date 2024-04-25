import { useState, useEffect } from 'react';
import api from '../../../util/Api';

interface Data {
  current_plan: {
    name: string;
    desc: string;
    price: string;
  }
  all_sum_amount: string;
  first_pay_time: string;
  last_pay_time: string;
  user: {
    name: string;
    avatar: string;
  }
}

function useFetchData(page: number|undefined, reloadnum: number|undefined, pagenum?: number|undefined, id?: string|undefined): [Data[], boolean, boolean, number, number] {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (page!==undefined) {
          const response = await api.post("/afdian/list", {
            page: page
          });
          setData(response.data.data.list);
          setTotalPages(response.data.data.total_page);
          setTotalCount(response.data.data.total_count);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchData();
  }, [id, page, pagenum, reloadnum]);

  return [data, isLoading, isError, totalCount, totalPages];
}

export default useFetchData;
