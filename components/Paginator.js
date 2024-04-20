import React, { useState } from 'react';
import styles from './ReportList.module.css'; // Reusing the same CSS module for styles

const Paginator = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Function to calculate the index of the first and last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {/* Display the current items - moved into the Paginator for this example */}
      {currentItems.map(item => (
        <div key={item.id} className={styles.reportItem}>
          <div className={styles.reportDetails}>
            <span className={styles.reportTitle}>{item.title}</span>
            <span className={styles.reportDate}>{item.date}</span>
            <span>{item.summary}</span>
            <span>{item.status}</span>
            <span>{item.author}</span>
            <span>{item.createdTime}</span>
          </div>
        </div>
      ))}

      {/* Pagination controls */}
      <div className={styles.paginator}>
        <button
          className={styles.button}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className={styles.button}
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Paginator;
