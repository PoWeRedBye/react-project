import React from 'react';
import './styles.css';

const number = {
  some: '01/19',
  date: '20 лютого 2019',
};
const client = {
  name_caps: 'ЖОРНИК МАКСИМ ОЛЕКСІЙОВИЧ',
  name_with_initials: 'M.О. Жорник',
  device_name: 'bizhub С5501',
  device_sn: 'A0U1021000270',
  bw_price_name: 'За один чорно-білий відбиток',
  bw_price: 0.62,
  color_price_name: 'За один повнокольоровий відбиток',
  color_price: 2,
  bw_prev_counter: 265900,
  bw_current_counter: 265900,
  color_prev_counter: 1112182,
  color_current_counter: 1116853,
};

export class ActTemplateHtmlPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/*шапка*/}
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '25px' }}>
          <div
            style={{ display: 'flex', flex: 0.8, justifyContent: 'center', paddingLeft: '100px', }}>
            Act number
          </div>
          <div style={{ display: 'flex', flex: 0.2, justifyContent: 'center', fontSize: 'smaller' }}>
            25 квітня 2019 р.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', fontSize: 'small', fontWeight: 800 }}>
          виконаних робіт за договором № ${number.some}` C + M від ${number.date}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', fontSize: 'small', fontWeight: 800 }}>
          з комплексного обслуговування виробництва копій або відбитків
        </div>
        <div
          style={{ display: 'flex', fontSize: 'smaller', fontStyle: 'italic', fontFamily: 'monospace', }}>
          Ми, що підписалися нижче, Замовник - ФІЗІЧНА ОСОБА – ПІДПРИЄМЕЦЬ {client.name_caps} з одного боку, та
          Виконавець - ФІЗІЧНА ОСОБА – ПІДПРИЄМЕЦЬ ОЗАРОВСЬКИЙ МАКСИМ ІГОРОВИЧ з іншого боку, склали цей акт про те, що
          Виконавцем були надані послуги з комплексного обслуговування віготовлення копій або відбитків на апараті
          {client.device_name} серійний номер {client.device_sn} в наступному обсязі:
        </div>
        {/*1й пункт*/}
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: '25px', fontWeight: 800, fontSize: 'small', }}>
          1. Ціна комплексного обслуговування згідно з п.3.1 договору
        </div>
        <div
          style={{ border: '1px solid black', borderTopWidth: 1, borderBottomWidth: 0, marginTop: '15px', }}>
          <div style={{ border: '1px solid black', height: '3px' }} />
          <div style={{ display: 'flex', flexDirection: 'row', minHeight: '15mm' }}>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '8mm', fontWeight: 800, fontSize: 'small', }}>№</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '128mm', fontWeight: 800, fontSize: 'small', }}>Найменування</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '26mm', fontWeight: 800, fontSize: 'small', }}>Ціна копії, грн. згідно договору</div>
          </div>
          <div style={{ border: '1px solid black', height: '3px' }} />
        </div>
        <div style={{ border: '1px solid black', borderTopWidth: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', wordBreak: 'break-word', minHeight: '5mm', }}>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '8mm', fontWeight: 800, fontSize: 'small', }}>{1}</div>
            <div style={{ textAlign: 'start', border: '1px solid black', width: '128mm', fontWeight: 800, fontSize: 'small', }}>{client.bw_price_name}</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '26mm', fontWeight: 800, fontSize: 'small', }}>{client.bw_price}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', wordBreak: 'break-word', minHeight: '5mm', }}>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '8mm', fontWeight: 800, fontSize: 'small', }}>{2}</div>
            <div style={{ textAlign: 'start', border: '1px solid black', width: '128mm', fontWeight: 800, fontSize: 'small', }}>{client.color_price_name}</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '26mm', fontWeight: 800, fontSize: 'small', }}>{client.color_price}</div>
          </div>
          <div style={{ border: '1px solid black', height: '3px' }} />
        </div>
        {/*2й пункт*/}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px', fontWeight: 800, fontSize: 'small', }}>2. Показники лічільників</div>
        <div style={{ border: '1px solid black', borderTopWidth: 1, borderBottomWidth: 0, marginTop: '15px', }}>
          <div style={{ border: '1px solid black', height: '3px' }} />
          <div style={{ display: 'flex', flexDirection: 'row', minHeight: '15mm' }}>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '8mm', fontWeight: 800, fontSize: 'small', }}>№</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '62mm', fontWeight: 800, fontSize: 'small', }}>Найменування</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '22mm', fontWeight: 800, fontSize: 'small', }}>Попередні показники лічільників</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '22mm', fontWeight: 800, fontSize: 'small', }}>Поточні показники лічільників</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '23mm', fontWeight: 800, fontSize: 'small', }}>Кількість, штук</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '26mm', fontWeight: 800, fontSize: 'small', }}>Ціна, грн.</div>
          </div>
          <div style={{ border: '1px solid black', height: '3px' }} />
        </div>
        <div style={{ border: '1px solid black', borderTopWidth: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', wordBreak: 'break-word', minHeight: '5mm', }}>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '8mm', fontWeight: 800, fontSize: 'small', }}>{1}</div>
            <div style={{ textAlign: 'start', border: '1px solid black', width: '62mm', fontWeight: 800, fontSize: 'small', }}>Послуги з комплексного обслуговування копій: чорно-білі відбитки</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '22mm', fontWeight: 800, fontSize: 'small', }}>{client.bw_prev_counter.toLocaleString()}</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '22mm', fontWeight: 800, fontSize: 'small', }}>{client.bw_current_counter.toLocaleString()}</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '23mm', fontWeight: 800, fontSize: 'small', }}>{(client.bw_current_counter - client.bw_prev_counter).toLocaleString()}</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '26mm', fontWeight: 800, fontSize: 'small', }}>{((client.bw_current_counter - client.bw_prev_counter) * client.bw_price).toFixed(2).toLocaleString()}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', wordBreak: 'break-word', minHeight: '5mm', }}>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '8mm', fontWeight: 800, fontSize: 'small', }}>{2}</div>
            <div style={{ textAlign: 'start', border: '1px solid black', width: '62mm', fontWeight: 800, fontSize: 'small', }}>Послуги з комплексного обслуговування копій: повнокольорові відбитки</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '22mm', fontWeight: 800, fontSize: 'small', }}>{client.color_prev_counter.toLocaleString()}</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '22mm', fontWeight: 800, fontSize: 'small', }}>{client.color_current_counter.toLocaleString()}</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '23mm', fontWeight: 800, fontSize: 'small', }}>{(client.color_current_counter - client.color_prev_counter).toLocaleString()}</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '26mm', fontWeight: 800, fontSize: 'small', }}>{((client.color_current_counter - client.color_prev_counter) * client.color_price).toFixed(2).toLocaleString()}</div>
          </div>
          <div style={{ border: '1px solid black', height: '3px' }} />
        </div>
        {/*всего табличка*/}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', padding: '0 5px', height: 'calc(100% - 3px)', fontWeight: 800, fontSize: 'small', }}>
              <div style={{ margin: '1px 0' }}>Разом, грн.:</div>
            </div>
            <div>
              <div style={{ width: '26.25mm', border: '1px solid black', borderTopWidth: 0, }}>
                <div style={{ border: '1px solid black', textAlign: 'center', fontSize: 'small', fontWeight: 800, padding: '0 2px', borderTopWidth: 0, }}>{((client.color_current_counter - client.color_prev_counter) * client.color_price + (client.bw_current_counter - client.bw_prev_counter) * client.bw_price).toFixed(2)}</div>
              </div>
              <div style={{ border: '2px solid black', height: '3px', width: '26.25mm', borderTopWidth: 0, }} />
            </div>
          </div>
        </div>
        {/*всего прописью*/}
        <div>

        </div>
      </React.Fragment>
    );
  }
}
