//imports

import { useEffect, useState } from "react";

//constants
const BASE_URL = `https://freecurrencyapi.net/api/v2/latest`;
const API_KEY = process.env.REACT_APP_CURRENCY_API_KEY;

// helper functions
const sortObj = (obj) => {
    return Object.keys(obj)
        .sort()
        .reduce(function (result, key) {
            result[key] = obj[key];
            return result;
        }, {});
};

//main-logic
const useEx = () => {
    const [exchangeRates, setexchangeRates] = useState([]);
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();
    const [amount, setAmount] = useState(1);
    const [rate, setRate] = useState();
    const [fromChange, setFromChange] = useState(true);
    const [rateData, setRateData] = useState({});
    useEffect(() => {
        fetch(`${BASE_URL}?apikey=${API_KEY}&base_currency=INR`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const arranged = sortObj(data.data);
                console.log(arranged);
                setexchangeRates(Object.keys(arranged));
                // console.log(Object.keys(data.data));
                setFromCurrency(data.query.base_currency);
                setToCurrency(Object.keys(data.data)[0]);
                setRate(data.data[Object.keys(data.data)[0]]);
                setRateData(arranged);
            });
    }, []);

    useEffect(() => {
        fetch(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
            .then((res) => res.json())
            .then((data) => {
                setRate(data.data[toCurrency]);
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
