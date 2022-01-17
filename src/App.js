import "./App.css";
import CurrencyInput from "./components/CurrencyInput/CurrencyInput";
import useEx from "./components/useEx";

function App() {
    const {
        exchangeRates,
        fromCurrency,
        toCurrency,
        onChangeFromCurrency,
        onChangeToCurrency,
        toAmount,
        fromAmount,
        onFromAmountChange,
        onToAmountChange,
    } = useEx();
    // console.log(exchangeRates);
    console.log(fromCurrency);
    console.log(toCurrency);
    return (
        <div className="App">
            <CurrencyInput
                rateList={exchangeRates}
                selectCurrency={fromCurrency}
                onChangeCurrency={onChangeFromCurrency}
                amount={fromAmount}
                onAmountChange={onFromAmountChange}
            />
            <CurrencyInput
                rateList={exchangeRates}
                selectCurrency={toCurrency}
                onChangeCurrency={onChangeToCurrency}
                amount={toAmount}
                onAmountChange={onToAmountChange}
            />
        </div>
    );
}

export default App;
