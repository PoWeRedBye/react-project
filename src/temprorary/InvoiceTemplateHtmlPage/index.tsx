import React from 'react';
import './styles.css';

const dictionary: { [key: string]: string } = {
  '1': 'Копії',
  '2': 'Шт.',
};

const pdv = {
  withPDV: 2,
};

const data = [
  { name: 'Чорно-білі відбитки', type: 1, amount: 0, price: 0.6200 },
  { name: 'Колорові відбитки', type: 1, amount: 4671, price: 2.0000},
  /*{ name: 'name 3', type: 1, amount: 30, price: 3 },
  { name: 'name 4', type: 1, amount: 40, price: 4 },
  { name: 'name 5', type: 1, amount: 50, price: 5 },
  { name: 'name 6', type: 1, amount: 60, price: 6 },
  { name: 'name 7', type: 1, amount: 70, price: 7 },
  { name: 'name 8', type: 1, amount: 80, price: 8 },
  { name: 'name 9', type: 1, amount: 90, price: 9 },
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
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },
  { name: 'name 10', type: 1, amount: 100, price: 10 },*/
];

const global: { [key: string]: number } = {
  '1': 0,
  '2': 0.2,
};

export class InvoiceTemplateHtmlPage extends React.Component {
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

        <div style={{ backgroundColor: '#89d289', border: '1px solid black', borderBottomWidth: 0, marginTop: '15px'}}>
          <div style={{ border: '1px solid black', height: '3px' }} />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '8mm' }}>№</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '70mm' }}>Найменування</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '17mm' }}>Од.</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '20mm' }}>Кількість</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '20mm' }}>Ціна, грн.</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '28mm' }}>Сума, грн.</div>
          </div>
          <div style={{ border: '1px solid black', height: '3px' }} />
        </div>
        <div style={{ border: '1px solid black', borderTopWidth: 0 }}>
          <div style={{ textAlign: 'center', border: '1px solid black' }}>
            Послуги з кмплексного ослуговування виробнитства копій або відбитків
          </div>
          {data.map((item, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'row', wordBreak: "break-word", minHeight: '5mm' }}>
              <div style={{ textAlign: 'center', border: '1px solid black', width: '8mm' }}>{index}</div>
              <div style={{ textAlign: 'center', border: '1px solid black', width: '70mm' }}>{item.name}</div>
              <div style={{ textAlign: 'center', border: '1px solid black', width: '17mm' }}>{dictionary[item.type]}</div>
              <div style={{ textAlign: 'center', border: '1px solid black', width: '20mm' }}>{(item.amount).toLocaleString()}</div>
              <div style={{ textAlign: 'center', border: '1px solid black', width: '20mm' }}>{item.price.toFixed(4)}</div>
              <div style={{ border: '1px solid black', width: '28mm', textAlign: 'right', padding: '0 2px' }}>
                {(item.amount * item.price).toFixed(2)}
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
              <div style={{ width: '28.25mm', border: '1px solid black', borderTopWidth: 0 }}>
                <div style={{ border: '1px solid black', borderTopWidth: 0, textAlign: 'right', padding: '0 2px' }}>
                  {data.reduce((result, item) => result + item.amount * item.price, 0).toFixed(2)}
                </div>
                <div style={{ border: '1px solid black', textAlign: 'right', padding: '0 2px', fontSize: "smaller" }}>
                  {global[pdv.withPDV]
                    ? (data.reduce((result, item) => result + item.amount * item.price, 0) * global[pdv.withPDV]).toFixed(2)
                    : 'не передбачено'}
                </div>
                <div style={{ border: '1px solid black', textAlign: 'right', padding: '0 2px' }}>
                  {(data.reduce((result, item) => result + item.amount * item.price, 0) *
                    (global[pdv.withPDV] ? global[pdv.withPDV] + 1 : 1)).toFixed(2)}
                </div>
              </div>
              <div style={{ border: '2px solid black', height: '3px', width: '28.25mm', borderTopWidth: 0 }} />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
          <div>Всього на сумму:</div>
          <div>Сумма прописью</div>
          <div>
            ПДВ:{' '}
            {global[pdv.withPDV]
              ? `${(data.reduce((result, item) => result + item.amount * item.price, 0) * global[pdv.withPDV])} грн.`
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
