import React from 'react';

import styles from './Button.css';

const Button = ({buttons}) => {
  const btns = buttons.map((b, idx) => (
    <button key={`${b.type}-${idx}`} type={'button'} className={styles[b.type]}>{b.text}</button>
  ))

  return btns;
}

export default Button;
