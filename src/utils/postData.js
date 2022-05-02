import { api } from "./api";

const postData = async (config, endpoint, payload, setIsLoading, onSuccess, onFailed) => {
    setIsLoading(true);

    try {
        await api().post(endpoint, payload, config);
        onSuccess && onSuccess();
    } catch (e) {
        onFailed && onFailed();
    } finally {
        setIsLoading(false);
    }
}

export default postData;