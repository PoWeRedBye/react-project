import React from 'react';
import photo_background from '../../icons/sr_558908_large.jpg'
import user_photo from '../../icons/user.svg'
import styles from './UserProfilePage.module.scss'


export class UserProfilePage extends React.Component {


  //RENDER
  render() {
    return (
      <div className={styles.profile_top}>
        <img className={styles.img_fluid} alt="profile banner" src={photo_background} height={200}/>
        <div className={styles.profile_content}>
          <div className={styles.media}>
            <img className={styles.rounded_circle} alt="user photo" src={user_photo} width={140} height={140}/>
            <div className={styles.media_body}>
              <div className={styles.mb_20}>
                <h2>user name</h2>
                <p>user@email.com</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>user name</h1>
          <h1>user mail</h1>
        </div>
      </div>
    );
  }
}
