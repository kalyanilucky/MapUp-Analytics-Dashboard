import React from 'react';

function KeyMetrics({ title, value }) {
  return (
    <div className="key-metrics">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default KeyMetrics;