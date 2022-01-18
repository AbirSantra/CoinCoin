import React from "react";
import "./CurrencyInput.css";

const CurrencyInput = (props) => {
    const {
        rateList,
        selectCurrency,
        onChangeCurrency,
        amount,
        onAmountChange,
        labelText,
    } = props;
    return (
        <div className="currency-input-container">
            <p className="label-text">{labelText}</p>
            <div className="currency-input">
                <select
                    value={selectCurrency}
                    onChange={onChangeCurrency}
                    name="currency"
                >
                    {rateList.map((listItem) => {
                        return (
                            <option key={listItem} value={listItem}>
                                {listItem}
                            </option>
                        );
                    })}
                </select>
                <input type="number" value={amount} onChange={onAmountChange} />
            </div>
        </div>
    );
};

export default CurrencyInput;
