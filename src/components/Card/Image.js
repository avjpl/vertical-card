import React from 'react';

const Image = ({ image }) => (
  <img src={image.src} alt={image.alt} />
);

export default Image;
