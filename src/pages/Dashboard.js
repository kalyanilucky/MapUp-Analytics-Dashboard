import React, { useState} from 'react';
import KeyMetrics from '../Components/KeyMetrics';
import Charts from '../Components/Charts';
import DataTable from '../Components/DataTable';

function Dashboard() {
  const [chartData, setChartData] = useState([10, 20, 30, 20,10,20,10,40]);
  const [labels, setLabels] = useState(['Q1', 'Q2', 'Q3', 'Q4','Q5','Q6','Q7','Q8']);
  const [tableRows, setTableRows] = useState([
    { id: 1, col1: 'Row 1', col2: 100 },
    { id: 2, col1: 'Row 2', col2: 200 },
    { id: 3, col1: 'Row 3', col2: 300 },
  ]);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="metrics">
        <KeyMetrics title="Users" value="1234" />
        <KeyMetrics title="Revenue" value="$10,000" />
      </div>
      <div className="charts">
        <Charts data={chartData} labels={labels} />
      </div>
      <div className="table">
        <DataTable rows={tableRows} />
      </div>
    </div>
  );
}

export default Dashboard;
