import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded">Nature Credits: 1280</div>
        <div className="bg-gray-800 p-4 rounded">CO2 Reduction: 4.5t</div>
        <div className="bg-gray-800 p-4 rounded">AI Insight: Biodiversity change detected</div>
        <div className="bg-gray-800 p-4 rounded">Sensor map over Skallebaek (placeholder)</div>
      </div>
    </div>
  );
};

export default Dashboard;
