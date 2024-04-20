// pages/index.js

import React from 'react';
import ReportList from '../components/ReportList.js';

export default function Home() {
  return (
    <div>
      <h1>Recently Generated Reports</h1>
      <ReportList />
    </div>
  );
}
