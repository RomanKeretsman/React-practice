import React from 'react';

function StatisticItem({ label, percentage }) {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </>
  );
}

export default StatisticItem;
