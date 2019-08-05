import React from 'react';
import styles from "./Footer.module.scss";


export class Footer extends React.Component {


  render() {
    return (
      <div className={styles.contacts}>
        <div className={styles.contactsImage}>
          <img src="http://localhost:3030/file/copy-machine.svg" className={styles.svg}/>
          <div>@ 2019 FEROTEKH</div>
        </div>
        <div className={styles.contactsButton}>
          <div>О компании</div>
          <div>Сервисное обслуживание</div>
          <div>Продажа техники</div>
          <div>Полиграфия</div>
          <div>Контакты</div>
        </div>
        <div className={styles.contactsInfo}>
          <div>050 000 00 00</div>
          <div>050 000 00 00</div>
          <div>050 000 00 00</div>
          <div>Адрес: Харьков ул. Алчевских 17/1</div>
          <div>График работы: с 9.00 до 18.00</div>
          <div>Выходной СБ., ВС.</div>

        </div>
      </div>
    )
  }
}
