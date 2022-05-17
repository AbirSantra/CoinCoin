//imports

import { useEffect, useState } from "react";

//constants
const BASE_URL = `https://api.currencyapi.com/v3/latest`;
const API_KEY = process.env.REACT_APP_CURRENCY_API_KEY;

//main-logic
const useEx = () => {
    const [exchangeRates, setexchangeRates] = useState([]);
    const [fromCurrency, setFromCurrency] = useState("INR");
    const [toCurrency, setToCurrency] = useState();
    const [amount, setAmount] = useState(1);
    const [rate, setRate] = useState();
    const [fromChange, setFromChange] = useState(true);
    const [rateData, setRateData] = useState({});
    useEffect(() => {
        fetch(`${BASE_URL}?apikey=${API_KEY}&base_currency=INR`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                // const arranged = sortObj(data.data);
                // console.log(arranged);
                setexchangeRates(Object.keys(data.data));
                // console.log(data.data);
                setFromCurrency("INR");
                // console.log(Object.keys(data.data)[0]);
                setToCurrency(Object.keys(data.data)[0]);
                // console.log(data.data[Object.keys(data.data)[0]].value);
                setRate(data.data[Object.keys(data.data)[0]].value);
                setRateData(data.data);
            });
    }, []);

    useEffect(() => {
        // console.log(fromCurrency);
        fetch(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
            .then((res) => res.json())
            .then((data) => {
                setRate(data?.data[toCurrency]?.value);
                setRateData(data.data);
            });
    }, [fromCurrency, toCurrency]);

    let toAmount, fromAmount;
    if (fromChange) {
        toAmount = (amount * rate).toFixed(3);
        fromAmount = amount;
    } else {
        toAmount = amount;
        fromAmount = (amount / rate).toFixed(3);
    }

    const onChangeFromCurrency = (e) => {
        setFromCurrency(e.target.value);
    };
    const onChangeToCurrency = (e) => {
        setToCurrency(e.target.value);
    };
    const onFromAmountChange = (e) => {
        setAmount(e.target.value);
        setFromChange(true);
    };
    const onToAmountChange = (e) => {
        setAmount(e.target.value);
        setFromChange(false);
    };

    return {
        //return values
        exchangeRates,
        fromCurrency,
        toCurrency,
        onChangeFromCurrency,
        onChangeToCurrency,
        toAmount,
        fromAmount,
        onFromAmountChange,
        onToAmountChange,
        rate,
        rateData,
    };
};

export default useEx;
