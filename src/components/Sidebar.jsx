import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 p-4">
      <h1 className="text-xl font-bold mb-4">Freyra</h1>
      <nav>
        <ul className="space-y-2">
          <li>Dashboard</li>
          <li>Sensors</li>
          <li>Analytics</li>
          <li>Reports</li>
          <li>Exchange</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;