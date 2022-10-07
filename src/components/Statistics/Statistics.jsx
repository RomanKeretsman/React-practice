import React from 'react';
import StatisticItem from '../StatisticItem/StatisticItem';

const Statistics = ({ title, data }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {data.map(({ id, label, percentage }) => (
          <li key={id}>
            <StatisticItem label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
