import React from 'react';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </>
  );
};

export default TransactionHistoryItem;
