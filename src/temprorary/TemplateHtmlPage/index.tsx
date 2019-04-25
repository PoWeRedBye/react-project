import React from 'react';
import './styles.css';

const dictionary: { [key: string]: string } = {
  '1': 'Копії',
  '2': 'Шт.',
};

const data = [
  { name: 'name 1', type: 1, amount: 10, price: 1 },
  { name: 'name 2', type: 1, amount: 20, price: 2 },
  { name: 'name 3', type: 1, amount: 30, price: 3 },
  { name: 'name 4', type: 1, amount: 40, price: 4 },
  { name: 'name 5', type: 1, amount: 50, price: 5 },
  { name: 'name 6', type: 1, amount: 60, price: 6 },
  { name: 'name 7', type: 1, amount: 70, price: 7 },
  { name: 'name 8', type: 1, amount: 80, price: 8 },
  { name: 'name 9', type: 1, amount: 90, price: 9 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  /*{ name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },*/
];

const global = {
  // pdv: 0,
  pdv: 0.2,
};

export class TemplateHtmlPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>УВАГА ! Рахунок має бути сплачений протягом 3 банківських днів</div>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '25px' }}>
          <div style={{ width: '135px' }}>ПОСТАЧАЛЬНИК:</div>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '15px' }}>
            <div>MY FOP NAME</div>
            <div style={{ marginTop: '15px' }}>ЄДРПО/ДРФО: 3253008234</div>
            <div>Р/рахунок: 26003052119396 в АТ КБ ПриватБанк.</div>
            <div>МФО: 351533</div>
            <div style={{ marginTop: '15px' }}>Адреса: 61145, м. Харків, вул. Новгородська, 4, кв. 92.</div>
            <div>Платник единого податку на прибуток</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '25px' }}>
          <div style={{ width: '135px' }}>ОДЕРЖУВАЧ:</div>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '15px' }}>SOME CLIENT NAME</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginLeft: '150px' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>Рахунок-фактура №:</div>
            <div style={{ marginLeft: '5px' }}>06/19</div>
          </div>
          <div>SOME DATE with format "dd" mmmm YYYY </div>
        </div>

        <div style={{ backgroundColor: '#89d289', border: '1px solid black', borderBottomWidth: 0 }}>
          <div style={{ border: '1px solid black', height: '3px' }} />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ textAlign: 'center', border: '1px solid black', flex: 1 }}>№</div>
            <div style={{ textAlign: 'center', border: '1px solid black', flex: 1 }}>НАЙМЕНУВАННЯ</div>
            <div style={{ textAlign: 'center', border: '1px solid black', flex: 1 }}>Од.</div>
            <div style={{ textAlign: 'center', border: '1px solid black', flex: 1 }}>Кількість</div>
            <div style={{ textAlign: 'center', border: '1px solid black', flex: 1 }}>Ціна, грн.</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '125px' }}>Сума, грн.</div>
          </div>
          <div style={{ border: '1px solid black', height: '3px' }} />
        </div>
        <div style={{ border: '1px solid black', borderTopWidth: 0 }}>
          <div style={{ textAlign: 'center', border: '1px solid black' }}>
            Послуги з кмплексного ослуговування виробнитства копій або відбитків
          </div>
          {data.map((item, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ textAlign: 'center', border: '1px solid black', flex: 1 }}>{index}</div>
              <div style={{ textAlign: 'center', border: '1px solid black', flex: 1 }}>{item.name}</div>
              <div style={{ textAlign: 'center', border: '1px solid black', flex: 1 }}>{dictionary[item.type]}</div>
              <div style={{ textAlign: 'center', border: '1px solid black', flex: 1 }}>{item.amount}</div>
              <div style={{ textAlign: 'center', border: '1px solid black', flex: 1 }}>{item.price}</div>
              <div style={{ border: '1px solid black', width: '125px', textAlign: 'right', padding: '0 2px' }}>
                {item.amount * item.price}
              </div>
            </div>
          ))}
          <div style={{ border: '1px solid black', height: '3px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end',
                padding: '0 5px',
                height: 'calc(100% - 3px)',
              }}
            >
              <div style={{ margin: '1px 0' }}>Ітого:</div>
              <div style={{ margin: '1px 0' }}>ПДВ:</div>
              <div style={{ margin: '1px 0' }}>Всього:</div>
            </div>
            <div>
              <div style={{ width: '127px', border: '1px solid black', borderTopWidth: 0 }}>
                <div style={{ border: '1px solid black', borderTopWidth: 0, textAlign: 'right', padding: '0 2px' }}>
                  {data.reduce((result, item) => result + item.amount * item.price, 0)}
                </div>
                <div style={{ border: '1px solid black', textAlign: 'right', padding: '0 2px' }}>
                  {global.pdv
                    ? data.reduce((result, item) => result + item.amount * item.price, 0) * global.pdv
                    : 'не передбачено'}
                </div>
                <div style={{ border: '1px solid black', textAlign: 'right', padding: '0 2px' }}>
                  {data.reduce((result, item) => result + item.amount * item.price, 0) *
                    (global.pdv ? global.pdv + 1 : 1)}
                </div>
              </div>
              <div style={{ border: '2px solid black', height: '3px', width: '127px', borderTopWidth: 0 }} />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
          <div>Всього на сумму:</div>
          <div>Сумма прописью</div>
          <div>
            ПДВ:{' '}
            {global.pdv
              ? `${data.reduce((result, item) => result + item.amount * item.price, 0) * global.pdv} грн.`
              : 'не передбачено'}
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end', padding: '0 70px'}}>
          Виписав(ла) _________________ ФОП М.І. Озаровський
        </div>
      </React.Fragment>
    );
  }
}
