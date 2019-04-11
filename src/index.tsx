import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import { RootContainer } from './containers/Root';

ReactDOM.render(<RootContainer />, document.getElementById('root') as HTMLElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
/*

interface Item {
  id: number;
  parent: number | null;
}

const sort = (arr: Item[]) => {
  const y: Item[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      if (arr[i].parent === arr[k].id) {
        y[i + 1] = {
          id: arr[k].id,
          parent: arr[k].parent,
        };
      } else {
        y[i] = {
          id: arr[k].id,
          parent: arr[k].parent,
        };
      }
    }
  }

  return y;
};

const initialArray = [
  { id: 1, parent: null },
  { id: 2, parent: 6 },
  { id: 3, parent: 7 },
  { id: 4, parent: 1 },
  { id: 5, parent: 1 },
  { id: 6, parent: null },
  { id: 7, parent: 2 },
  { id: 8, parent: 2 },
  { id: 9, parent: null },
  { id: 10, parent: null },
];
const expectedArray = [
  { id: 1, parent: null },
  { id: 4, parent: 1 },
  { id: 5, parent: 1 },
  { id: 6, parent: null },
  { id: 2, parent: 6 },
  { id: 7, parent: 2 },
  { id: 3, parent: 7 },
  { id: 8, parent: 2 },
  { id: 9, parent: null },
  { id: 10, parent: null },
];

console.log(sort(initialArray));
console.log(expectedArray);
*/
