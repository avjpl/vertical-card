import React from 'react';

import HorizontalCard from './Card/Horizontal';

const Home = () => {
  const config= {
    badge: '',
    image: {
      src: '../../../web/images/photos/cXpOMo-unsplash.jpg',
      alt: 'Land Rover Discovery'
    },
    ratings: {
      svgSrc: 'https://www.whatcar.com/static/media/starwithshadow.2eaf3458.svg',
      value: 3.5,
    },
    body: [<p>paragrapgh 1</p>, <p>paragrapgh 2</p>, <p>paragrapgh 3</p>],
    title: 'Land Rover Discovery',
    buttons: [
      {
        type: 'primary',
        text: 'Primary btn'
      },
      {
        type: 'secondary',
        text: 'Secondary btn'
      },
    ]
  };

  return (
    <HorizontalCard {...config}>
      <HorizontalCard.Image />
      <HorizontalCard.Badge />
      <HorizontalCard.Content>
        <HorizontalCard.Title />
        <HorizontalCard.Ratings />
        <HorizontalCard.Body />
        <HorizontalCard.Button />
      </HorizontalCard.Content>
    </HorizontalCard>
  );
};

export default Home;
