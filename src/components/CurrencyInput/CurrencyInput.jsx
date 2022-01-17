import React from "react";

const CurrencyInput = (props) => {
    const {
        rateList,
        selectCurrency,
        onChangeCurrency,
        amount,
        onAmountChange,
    } = props;
    return (
        <div>
            <input type="number" value={amount} onChange={onAmountChange} />
            <select value={selectCurrency} onChange={onChangeCurrency}>
                {rateList.map((listItem) => {
                    return (
                        <option key={listItem} value={listItem}>
                            {listItem}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default CurrencyInput;
