import React from "react";
import "./RateCard.css";

const RateCard = (props) => {
    const { baseCurrency, rate, toCurrency } = props;
    return (
        <div className="rateCard">
            <div className="rateCard-Container">
                <div className="rateCard-info">
                    <div className="basecurrency">
                        <span className="value">1.00</span>{" "}
                        <span className="name">{baseCurrency}</span>
                    </div>
                    <div className="equals-text">
                        <i class="fas fa-exchange-alt"></i>
                    </div>
                    <div className="tocurrency">
                        <span className="value">{rate.toFixed(3)}</span>{" "}
                        <span className="name">{toCurrency}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RateCard;
