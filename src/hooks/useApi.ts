import { useCallback, useEffect, useState } from 'react';

// in useStrict mode useEffect call twice but will not in production

export default function useApi(apiFunc) {
    return function useApiCall(...params) {
        const [result, setResult] = useState(null);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(false);

        const apiCall =  useCallback(() => {
            setLoading(true);
            // controller is new AbortController which set each api function
            const controller = apiFunc(...params, (ok, data) => {
                setLoading(false);
                if (ok) {
                    setResult(data);
                } else {
                    setError(data.message);
                }
            });
            return () => {
                controller.abort();
            };
        }, []);

        useEffect(() => {
            apiCall();
        }, []);

        return {result, loading, error, [apiFunc.name]: apiCall};
    };
}