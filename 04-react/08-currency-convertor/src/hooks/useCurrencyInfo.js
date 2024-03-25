import { useState, useEffect } from "react";

export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        fetch(`https://v6.exchangerate-api.com/v6/99f7a166a55e30f1f95f2063/latest/${currency}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch currency data');
            }
            return response.json();
        })
        .then(data => {
            setData(data.conversion_rates || {});
            setIsLoading(false);
        })
        .catch(error => {
            setError(error.message);
            setIsLoading(false);
        });
    }, [currency]);

    return { data, isLoading, error };
}
