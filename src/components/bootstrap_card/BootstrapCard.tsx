import React from 'react';

import { Props } from './types';
import { Card, CardBody, CardText } from 'reactstrap';
import { List, ListItem } from 'material';
import styles from './BootstrapCard.module.scss';
import SVG from 'react-inlinesvg';

export class BootstrapCard extends React.Component<Props> {
  render() {
    //TODO: {FIX} need add hover-effect with content changes and

    const { items } = this.props;
    if (items) {
      return (
        <List classes={{ root: styles.root }}>
          {items
            .map(item => (
              <ListItem key={item._id} className={styles.item}>
                <Card className={styles.card}>
                  <CardBody className={styles.cardBody}>
                    <div className={styles.body}>
                      <img src={item.card_image} className={styles.svg} />
                      <div className={styles.typed}>
                        <CardText>Тираж: {item.typed_count} шт.</CardText>
                        <CardText>Цена: {item.typed_price} грн. </CardText>
                      </div>
                    </div>
                    <CardText>{item.card_name}</CardText>
                  </CardBody>
                </Card>
              </ListItem>
            ))
            .reverse()}
        </List>
      );
    } else {
      return <div>u have nothing</div>;
    }
  }
}

/*
<img src={item.card_image} />


<SVG
                      cacheRequests={true}
                      description="The React logo"
                      loader={() => <span>Loading...</span>}
                      onError={error => console.log(error.message)}
                      onLoad={(src, hasCache) => console.log(src, hasCache)}
                      preProcessor={code => code.replace(/fill=".*?"/g, 'fill="currentColor"')}
                      src={item.card_image}
                      title="React"
                      uniqueHash="a1f8d1"
                      uniquifyIDs={true}
                    />


<ReactSVG src={item.card_image} afterInjection={(error, svg) => {
                      if (error) {
                        console.error(error);
                        return
                      }
                      console.log(svg)
                    }}
                              beforeInjection={svg => {
                                svg.classList.add('svg-class-name');
                                svg.setAttribute('style', 'width: 150px')
                              }}
                      // @ts-ignore
                              evalScripts="always"
                              fallback={() => <span>Error!</span>}
                              loading={() => <span>Loading</span>}
                              renumerateIRIElements={false}
                              wrapper="span"
                              className="wrapper-class-name"
                              onClick={() => {
                                console.log('wrapper onClick')
                              }}/>*/
