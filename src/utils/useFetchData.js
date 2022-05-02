import { useEffect, useState } from "react";
import { api } from "./api";

const useFetchData = (endpoint, refresh) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                if (endpoint) {
                    const res = await api().get(endpoint);
                    const data = await res.data;
                    setData(data);
                }
            } catch (error) {
                if (error.response) {
                    setError(`ERROR ${error.response.status}`);
                } else if (error.request) {
                    setError("No Internet Connection");
                } else {
                    setError("Unknown Error");
                }
            } finally {
                setIsLoading(false);
            }
        })();

    }, [endpoint, refresh]);

    return { data, error, isLoading };
}

export default useFetchData;