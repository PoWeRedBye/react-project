import React from 'react';

import { BootstrapCarousel } from 'src/components/carousel';

import styles from './Polygraphy.module.scss';
import { BootstrapButton } from 'src/components/bootstrap_button';
import { BootstrapCard } from 'src/components/bootstrap_card';
import { PolygraphyCard } from 'src/types/models';
import { Footer } from "src/components/footer";

const hardcoded_card = [
  {
    _id: '1',
    card_name: `canon card`,
    card_image: 'http://localhost:3030/file/canon.svg',
    typed_count: '100',
    typed_price: '150',
  },
  {
    _id: '2',
    card_name: `xerox card`,
    card_image: 'http://localhost:3030/file/xerox.svg',
    typed_count: '100',
    typed_price: '250',
  },
  {
    _id: '3',
    card_name: `hp card`,
    card_image: 'http://localhost:3030/file/hp.svg',
    typed_count: '100',
    typed_price: '350',
  },
  {
    _id: '4',
    card_name: `help card`,
    card_image: 'http://localhost:3030/file/help.svg',
    typed_count: '100',
    typed_price: '450',
  },
  {
    _id: '5',
    card_name: `5 -> card`,
    card_image: 'http://localhost:3030/file/help.svg',
    typed_count: '100',
    typed_price: '550',
  },
  {
    _id: '6',
    card_name: `6 -> card`,
    card_image: 'http://localhost:3030/file/help.svg',
    typed_count: '100',
    typed_price: '650',
  },
  {
    _id: '7',
    card_name: `7 -> card`,
    card_image: 'http://localhost:3030/file/help.svg',
    typed_count: '100',
    typed_price: '750',
  },
  {
    _id: '8',
    card_name: `8 -> card`,
    card_image: 'http://localhost:3030/file/help.svg',
    typed_count: '100',
    typed_price: '850',
  },
  {
    _id: '9',
    card_name: `canon card`,
    card_image: 'http://localhost:3030/file/canon.svg',
    typed_count: '100',
    typed_price: '950',
  },
  {
    _id: '10',
    card_name: `xerox card`,
    card_image: 'http://localhost:3030/file/xerox.svg',
    typed_count: '100',
    typed_price: '1050',
  },
  {
    _id: '11',
    card_name: `hp card`,
    card_image: 'http://localhost:3030/file/hp.svg',
    typed_count: '100',
    typed_price: '1150',
  },
  {
    _id: '12',
    card_name: `help card`,
    card_image: 'http://localhost:3030/file/help.svg',
    typed_count: '100',
    typed_price: '1250',
  },
  {
    _id: '13',
    card_name: `5 -> card`,
    card_image: 'http://localhost:3030/file/help.svg',
    typed_count: '100',
    typed_price: '1350',
  },
  {
    _id: '14',
    card_name: `6 -> card`,
    card_image: 'http://localhost:3030/file/help.svg',
    typed_count: '100',
    typed_price: '1450',
  },
  {
    _id: '15',
    card_name: `7 -> card`,
    card_image: 'http://localhost:3030/file/help.svg',
    typed_count: '100',
    typed_price: '1550',
  },
  {
    _id: '16',
    card_name: `8 -> card`,
    card_image: 'http://localhost:3030/file/help.svg',
    typed_count: '100',
    typed_price: '250',
  },
];

export class Polygraphy extends React.Component {
  render() {
    return (
      // TODO: {fix carousel} need fix animation bug!!!
      <div className={styles.polygraphy}>
        <div className={styles.polygraphySlide}>
          <BootstrapCarousel />
        </div>
        <div className={styles.polygraphyHighPriorityText}>Каталог полиграфической продукции</div>
        <div className={styles.polygraphyButtons}>
          <BootstrapButton color={'secondary'} text="Вся продукция" />
          <BootstrapButton color={'secondary'} text="Календари" />
          <BootstrapButton color={'secondary'} text="Каталоги" />
          <BootstrapButton color={'secondary'} text="Рекламная" />
          <BootstrapButton color={'secondary'} text="Книги" />
        </div>
        <div className={styles.polygraphyCard}>
          <BootstrapCard items={hardcoded_card as PolygraphyCard[]} />
        </div>
        <Footer/>
      </div>
    );
  }
}
