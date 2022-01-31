import "./App.css";
import CurrencyInput from "./components/CurrencyInput/CurrencyInput";
import RateCard from "./components/RateCard/RateCard";
import useEx from "./components/useEx";
import logo from "./img/Logo.png";
// import convertLogo from "./img/convert-logo.png";
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
        rateData,
    } = useEx();
    // console.log(exchangeRates);
    // console.log(fromCurrency);
    // console.log(toCurrency);
    return (
        <div className="App">
            <div className="container">
                <div className="main">
                    <div className="header">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="code-link">
                            <a
                                href="https://github.com/AbirSantra/CoinCoin"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fab fa-github"></i> Code
                            </a>
                        </div>
                    </div>
                    <div className="hero">
                        <div className="hero-content">
                            <div className="hero-text">
                                <div className="hero-text-content">
                                    <p className="headline">
                                        Free & Fast Currency Converter
                                    </p>
                                    <p className="subheading">
                                        Check foreign currency exchange rates.
                                    </p>
                                </div>
                            </div>
                            <div className="hero-img">
                                <img src={pigImage} alt="piggy-bank" />
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
                                        <i className="fas fa-exchange-alt"></i>
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
                                        <i className="fas fa-caret-right right-icon"></i>
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
            <div className="rate" id="more-section">
                <div className="rate-container">
                    <div className="rate-info-title">
                        <h1>Other Rates</h1>
                        <p>
                            Find the exchanges rates of all other currencies
                            below
                        </p>
                    </div>
                    <div className="rate-info-content">
                        {Object.keys(rateData).map((rateItem) => {
                            return (
                                <RateCard
                                    key={rateItem}
                                    baseCurrency={fromCurrency}
                                    rate={rateData[rateItem]}
                                    toCurrency={rateItem}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
