import React from 'react';

import styles from './Title.css';

const Title = ({ title }) => (
  <h1 className={styles.title}>{title}</h1>
);

export default Title;
