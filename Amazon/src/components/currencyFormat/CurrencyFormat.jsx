import React from "react";
import numeral from 'numeral'

const CurrencyFormat = ({ amount }) => {
    const formattedAccount = numeral(amount).format("$0,0.00")
    return <div>{formattedAccount}</div>;
}
export default CurrencyFormat