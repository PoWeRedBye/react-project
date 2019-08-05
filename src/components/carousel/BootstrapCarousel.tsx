import React from 'react';
import styles from './BootstrapCarousel.module.scss';

import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from 'mdbreact';
import Carousel from 'nuka-carousel';

const items = [
  {
    _id: 1,
    src: 'http://localhost:3030/file/konica_minolta.svg',
    altText: 'Slide 4',
    caption: 'Slide 4',
  },
  {
    _id: 2,
    src: 'http://localhost:3030/file/konica_minolta.svg',
    altText: 'Slide 4',
    caption: 'Slide 4',
  },
  {
    _id: 3,
    src: 'http://localhost:3030/file/konica_minolta.svg',
    altText: 'Slide 4',
    caption: 'Slide 4',
  },
  {
    _id: 4,
    src: 'http://localhost:3030/file/xerox.svg',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    _id: 5,
    src: 'http://localhost:3030/file/canon.svg',
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
  {
    _id: 6,
    src: 'http://localhost:3030/file/hp.svg',
    altText: 'Slide 3',
    caption: 'Slide 3',
  },
  {
    _id: 7,
    src: 'http://localhost:3030/file/konica_minolta.svg',
    altText: 'Slide 4',
    caption: 'Slide 4',
  },
  {
    _id: 8,
    src: 'http://localhost:3030/file/konica_minolta.svg',
    altText: 'Slide 4',
    caption: 'Slide 4',
  },
  {
    _id: 9,
    src: 'http://localhost:3030/file/konica_minolta.svg',
    altText: 'Slide 4',
    caption: 'Slide 4',
  },
];
export class BootstrapCarousel extends React.Component {
  render() {
    return (
      <Carousel enableKeyboardControls={false} autoplayReverse={true} className={styles.carousel} >
        {items.map(item => (
          <img src={item.src} width={350} height={250} />
        ))}
      </Carousel>
    );
  }
}
