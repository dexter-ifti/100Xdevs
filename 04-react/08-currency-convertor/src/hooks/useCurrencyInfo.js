import { useState, useEffect } from "react";


export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/99f7a166a55e30f1f95f2063/latest/${currency}`)
        .then( (res) => res.json())
        .then( (res) => setData(res.conversion_rates))
        .catch(error => console.error(`Error in Fetching data ${error}`))
        console.log(data);
    }, [currency]);
    console.log(data);
    return data;
}


// free api but not working
// fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)