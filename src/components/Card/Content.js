import React, { Children, cloneElement } from 'react';

import styles from './Content.css';

const Content = ({ children, ...rest }) => {
  const applySpacing = true;

  return (
    <div className={styles.content}>
      {
        Children.map(children, (child) => {
          return cloneElement(child, { applySpacing, ...rest })
        })
      }
    </div>
  );
}

export default Content;