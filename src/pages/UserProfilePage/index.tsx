import React from 'react';

import settings from 'src/icons/file/help.svg';
import user_photo from 'src/icons/file/user.svg';
import styles from './UserProfilePage.module.scss';

export class UserProfilePage extends React.Component {
  //RENDER
  render() {
    return (
      <div className={styles.profile_top}>
        {/*<img className={styles.img_fluid} alt="profile banner" src={photo_background} height={200}/>*/}
        <div className={styles.profile_info}>
          <div className={styles.media}>
            <img className={styles.rounded_circle} alt="user photo" src={user_photo} width={140} height={140} />
            <div className={styles.media_body}>
              <div className={styles.mb_20}>
                <h2 className={styles.user_name}>user name</h2>
                <p>user@email.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.profile_content}>
          <div className={styles.profile_content_left}>
            <h1>user position:</h1>
            <h2>Some Position</h2>
            <h1>user phone:</h1>
            <h2>+38(???)??-??-???</h2>
            <h2>+38(???)??-??-???</h2>
          </div>
          <div className={styles.profile_content_right}>
            <div className={styles.profile_content_right_header}>
              <img className={styles.profile_content_right_header_img} src={settings} width={50} height={50} />
              <h2 className={styles.profile_content_right_h2}>Settings</h2>
            </div>
            <div className={styles.profile_content_right}>
              <h2 className={styles['component-btn']}>Change Password</h2>
              <h2 className={styles['component-btn']}>Change Email</h2>
              <h2 className={styles['component-btn']}>Change User Information</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
