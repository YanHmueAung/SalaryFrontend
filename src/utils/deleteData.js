import { api } from "./api";

const deleteData = async (endpoint, setIsLoading, onSuccess, onFailed) => {
    setIsLoading(true);

    try {
        await api().delete(endpoint);
        onSuccess && onSuccess();
    } catch {
        onFailed && onFailed();
    } finally {
        setIsLoading(false);
    }
}

export default deleteData;