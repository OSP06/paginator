import React from 'react';
import { reports } from '../data/data';
import Paginator from './Paginator';
import styles from './ReportList.module.css';

const ReportList = () => {
  const filteredReports = reports.filter(report => {
    const reportDate = new Date(report.date);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return reportDate >= thirtyDaysAgo;
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recently Generated Reports</h1>
      {filteredReports.map((report) => (
        <div key={report.id} className={styles.reportItem}>
          <div className={styles.reportDetails}>
            <span className={styles.reportTitle}>{report.title}</span>
            <span className={styles.reportDate}>{report.date}</span>
            {/* Add more details as you like here */}
          </div>
          <div>
            {/* Place for more information like status, author, etc. */}
            <span>{report.status}</span>
          </div>
        </div>
      ))}
      <div className={styles.paginator}>
        <Paginator items={filteredReports} itemsPerPage={5} />
      </div>
    </div>
  );
};

export default ReportList;
