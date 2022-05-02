import { api } from "./api";

const putData = async (endpoint, payload, setIsLoading, onSuccess, onFailed) => {
    setIsLoading(true);

    try {
        await api().put(endpoint, payload);
        onSuccess && onSuccess();
    } catch {
        onFailed && onFailed();
    } finally {
        setIsLoading(false);
    }
}

export default putData;