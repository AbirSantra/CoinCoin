import "./App.css";
import CurrencyInput from "./components/CurrencyInput/CurrencyInput";
import useEx from "./components/useEx";
import logo from "./img/Logo.png";
import convertLogo from "./img/convert-logo.png";
import pigImage from "./img/Pig.svg";

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
        rate,
    } = useEx();
    // console.log(exchangeRates);
    console.log(fromCurrency);
    console.log(toCurrency);
    return (
        <div className="App">
            <div className="container">
                <div className="main">
                    <div className="header">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="hero">
                        <div className="hero-content">
                            <div className="hero-text">
                                <p className="headline">
                                    Free & Fast Currency Converter
                                </p>
                                <p className="subheading">
                                    Check foreign currency exchange rates.
                                </p>
                                <div className="hero-img">
                                    <img src={pigImage} alt="piggy-bank" />
                                </div>
                            </div>
                            <div className="hero-card">
                                <div className="input-box">
                                    <CurrencyInput
                                        rateList={exchangeRates}
                                        selectCurrency={fromCurrency}
                                        onChangeCurrency={onChangeFromCurrency}
                                        amount={fromAmount}
                                        onAmountChange={onFromAmountChange}
                                        labelText="Convert from"
                                    />
                                    <div className="convert-logo">
                                        <img src={convertLogo} alt="" />
                                    </div>
                                    <CurrencyInput
                                        rateList={exchangeRates}
                                        selectCurrency={toCurrency}
                                        onChangeCurrency={onChangeToCurrency}
                                        amount={toAmount}
                                        onAmountChange={onToAmountChange}
                                        labelText="Convert to"
                                    />
                                </div>
                                <div className="standard-rate">
                                    <p>
                                        1 {fromCurrency} equals{" "}
                                        {(1 * rate).toFixed(3)} {toCurrency}
                                    </p>
                                </div>
                                <div>
                                    <a
                                        href="#more-section"
                                        className="more-btn"
                                    >
                                        Check other Rates{" "}
                                        <i class="fas fa-caret-right right-icon"></i>
                                    </a>
                                </div>
                                <div className="bottom-text">
                                    <p>Designed and Coded by Abir Santra</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
