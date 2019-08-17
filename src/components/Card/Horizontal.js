import React, { Children, cloneElement } from 'react';

import styles from '../Card/Horizontal.css';

import Badge from '../Ui/Badge';
import Ratings from '../Ui/Ratings';
import Button from '../Ui/Button';
import Content from './Content';
import Image from './Image';
import Body from './Body';
import Title from './Title';

const Horizontal = ({ children, ...rest }) => {
  return (
    <div className={styles.horizontal}>
      {
        Children.map(children, (child) => {
          return cloneElement(child, { ...rest })
        })
      }
    </div>
  );
}

Horizontal.Badge = Badge;
Horizontal.Ratings = Ratings;
Horizontal.Button = Button;
Horizontal.Content = Content;
Horizontal.Image = Image;
Horizontal.Body = Body;
Horizontal.Title = Title;

export default Horizontal;