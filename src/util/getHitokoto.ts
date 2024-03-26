import axios, { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
import api from "./Api";

function useFetchData(): [any, boolean, boolean] {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchData = useCallback(async () => {
        try {
            const response = await api.get("/hitokoto");
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching hitokoto data:', error);
            setIsLoading(false);
            setIsError(true);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return [data, isLoading, isError];
}

export default useFetchData;
