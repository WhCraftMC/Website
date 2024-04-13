import { useState, useEffect } from 'react';
import api from '../../../util/Api';

interface Data {
  id: number;
  name: string;
  uuid: string;
  ip: string;
  reason: string;
  banned_by_uuid: string;
  banned_by_name: string;
  removed_by_uuid: null | string;
  removed_by_name: string;
  removed_by_reason: null | string;
  removed_by_date: string;
  time: number;
  until: number;
  template: number;
  server_scope: string;
  server_origin: string;
  silent: {
    type: string;
    data: number[];
  };
  ipban: {
    type: string;
    data: number[];
  };
  ipban_wildcard: {
    type: string;
    data: number[];
  };
  active: {
    type: string;
    data: number[];
  };
}

function useFetchData(page: string|undefined, reloadnum: number|undefined, pagenum?: number|undefined, id?: string|undefined): [Data[], boolean, boolean, number, number] {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (page!==undefined && page !== null && id!==null && id!==undefined) {
          const response = await api.get(`/punish/${page}/${id}`);
          const nameResponses = await Promise.all(response.data.data.map((item: Data) => api.get(`/punish/getname/${item.uuid}`)));
          const names = nameResponses.map((response) => response.data.data[0].name);
          setData(response.data.data.map((item: Data, index: number) => ({ ...item, name: names[index] })));
          setIsLoading(false);
        } else if (page!==undefined && page!==null && pagenum!==null && pagenum!==undefined) {
          const response = await api.get(`/punish/${page}?page=${pagenum}`);
          const nameResponses = await Promise.all(response.data.data.data.map((item: Data) => api.get(`/punish/getname/${item.uuid}`)));
          const names = nameResponses.map((response) => response.data.data[0].name);
          setTotalCount(response.data.data.totalCount);
          setTotalPages(response.data.data.totalPages);
          setData(response.data.data.data.map((item: Data, index: number) => ({ ...item, name: names[index] })));
          setIsLoading(false);
        } else {
          setIsLoading(false);
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
