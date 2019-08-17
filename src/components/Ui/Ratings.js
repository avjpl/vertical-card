import React from 'react';

import styles from './Ratings.css';

const Ratings = ({ ratings }) => {
  const stars = Array(5).fill(<img className={styles.star} src={ratings.svgSrc} />);

  return <div className={styles.ratings}>{stars}</div>;
};

export default Ratings;
