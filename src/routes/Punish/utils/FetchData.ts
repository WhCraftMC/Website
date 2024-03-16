import { useState, useEffect } from 'react';
import api from '../../../util/Api';

interface Data {
  id: number;
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

interface UpdatedData extends Data {
  name: string;
}

function useFetchData(page: string|undefined, id?: string|undefined): [UpdatedData[], boolean] {
  const [data, setData] = useState<UpdatedData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (page!==undefined && page !== null && id!==null && id!==undefined) {
          const response = await api.get(`/punish/${page}/${id}`);
          const nameResponses = await Promise.all(response.data.data.map((item: Data) => api.get(`/punish/getname/${item.uuid}`)));
          const names = nameResponses.map((response) => response.data.data[0].name);
          setData(response.data.data.map((item: Data, index: number) => ({ ...item, name: names[index] })));
          setIsLoading(false);
        } else if (page!==undefined && page!==null) {
          const response = await api.get(`/punish/${page}`);
          const nameResponses = await Promise.all(response.data.data.map((item: Data) => api.get(`/punish/getname/${item.uuid}`)));
          const names = nameResponses.map((response) => response.data.data[0].name);
          setData(response.data.data.map((item: Data, index: number) => ({ ...item, name: names[index] })));
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, page]);

  return [data, isLoading];
}

export default useFetchData;
