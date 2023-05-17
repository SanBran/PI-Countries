import React from "react";
import styles from "./Pagination.module.css"

const Pagination = ({countriesPerPage, paginationSize, allCountries, currentPage, setCurrentPage, active, setActive}) => {
    const pageNumbers = []

    for (let i = 1; i <= allCountries/countriesPerPage; i++) {
        pageNumbers.push(i)
        
    }

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
        setActive(currentPage + 1)
    }

    const prevPage = () => {
        setCurrentPage(currentPage - 1)
        setActive(currentPage - 1)
    }

    const specificPage = (n) => {
        setCurrentPage(n)
        setActive(n)
    }

    const renderPageNumbers = () => {
        const visiblePageNumbers = pageNumbers.slice(
          Math.max(currentPage - 3, 0),
          Math.min(currentPage + 3, pageNumbers.length)
        );
    
        return visiblePageNumbers.map((page, index) => (
          <div
            value={page}
            className={active === page ? styles.active : styles.page}
            key={index}
            onClick={() => specificPage(page)}
          >
            {page}
          </div>
        ));
      };

      return (
        <div className={styles.container}>
          {currentPage > 1 ? (
            <div className={styles.Previous} onClick={prevPage}>
              PREVIOUS
            </div>
          ) : (
            <div className={styles.disPrevious}>PREVIOUS</div>
          )}
          {renderPageNumbers()}
          {currentPage < pageNumbers.length ? (
            <div className={styles.Next} onClick={nextPage}>
              NEXT
            </div>
          ) : (
            <div className={styles.disNext}>NEXT</div>
          )}
        </div>
      );
    };
    

export default Pagination