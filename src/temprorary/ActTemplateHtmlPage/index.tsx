import React from 'react';
import './styles.css';

const client = {
  act_number: '10',
  act_date: '24 квітня 2019',
  contract_number:'01/19',
  contract_date:'20 лютого 2019',
  organization_structure: 'ФІЗИЧНА ОСОБА - ПІДПРИЕМЕЦЬ',
  name_caps: 'КОЧНЕВ КОНСТЯНТИН В\'ЯЧЕСЛАВОВИЧ',
  name_with_initials: 'К.В. Кочнев',
  adress:'61103, м.Харків, пр. Науки, 77, кв. 102',
  edrpo_drfo:'2465420673',
  client_rr:'26002578866900 в ПАТ"УкрСиббанк"',
  mfo:'351005',
  device_name: 'bizhub С6501',
  device_sn: 'A0U2021000134',
  bw_price: 0.62,
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
          <div style={{ display: 'flex', flex: 0.8, justifyContent: 'center', paddingLeft: '100px', fontWeight: 800}}>
            <span>АКТ №: {client.act_number}</span>
          </div>
          <div style={{ display: 'flex', flex: 0.2, justifyContent: 'center', fontSize: 'smaller', fontWeight: 800}}>
            {client.act_date}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', fontSize: 'small', fontWeight: 800 }}>
          виконаних робіт за договором №{client.contract_number} C + M від {client.contract_date}
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
          <div style={{ display: 'flex', flexDirection: 'row', minHeight: '15mm', backgroundColor: '#89d289' }}>
            <div style={{border: '1px solid black', width: '8mm'}}>
              <span style={{display: 'inline-grid',textAlign: 'center', fontWeight: 800, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }} >№</span>
            </div>
            <div style={{border: '1px solid black', width: '128mm'}}>
              <span style={{display: 'inline-grid',textAlign: 'center', fontWeight: 800, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }}>Найменування</span>
            </div>
            <div style={{border: '1px solid black', width: '26mm'}}>
              <span style={{display: 'inline-grid',textAlign: 'center', fontWeight: 800, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }}>Ціна копії, грн. згідно договору</span>
            </div>
          </div>
          <div style={{ border: '1px solid black', height: '3px' }} />
        </div>
        <div style={{ border: '1px solid black', borderTopWidth: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', wordBreak: 'break-word', minHeight: '5mm', }}>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '8mm', fontWeight: 400, fontSize: 'small', }}>{1}</div>
            <div style={{ textAlign: 'start', border: '1px solid black', width: '128mm', fontWeight: 400, fontSize: 'small', }}>За один чорно-білий відбиток</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '26mm', fontWeight: 400, fontSize: 'small', }}>{client.bw_price}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', wordBreak: 'break-word', minHeight: '5mm', }}>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '8mm', fontWeight: 400, fontSize: 'small', }}>{2}</div>
            <div style={{ textAlign: 'start', border: '1px solid black', width: '128mm', fontWeight: 400, fontSize: 'small', }}>За один повнокольоровий відбиток</div>
            <div style={{ textAlign: 'center', border: '1px solid black', width: '26mm', fontWeight: 400, fontSize: 'small', }}>{client.color_price}</div>
          </div>
          <div style={{ border: '1px solid black', height: '3px' }} />
        </div>
        {/*2й пункт*/}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px', fontWeight: 800, fontSize: 'small', }}>2. Показники лічільників</div>
        <div style={{ border: '1px solid black', borderTopWidth: 1, borderBottomWidth: 0, marginTop: '15px', }}>
          <div style={{ border: '1px solid black', height: '3px' }} />
          <div style={{ display: 'flex', flexDirection: 'row', minHeight: '15mm', backgroundColor: '#89d289' }}>
            <div style={{ border: '1px solid black', width: '8mm'}}>
              <span style={{display: 'inline-grid',textAlign: 'center', fontWeight: 800, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }} >№</span>
            </div>
            <div style={{ border: '1px solid black', width: '64mm' }}>
              <span style={{display: 'inline-grid',textAlign: 'center', fontWeight: 800, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }}>Найменування</span>
            </div>
            <div style={{ border: '1px solid black', width: '22mm' }}>
              <span style={{display: 'inline-grid',textAlign: 'center', fontWeight: 800, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }}>Попередні показники лічільників</span>
            </div>
            <div style={{ border: '1px solid black', width: '22mm' }}>
              <span style={{display: 'inline-grid',textAlign: 'center', fontWeight: 800, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }}>Поточні показники лічільників</span>
            </div>
            <div style={{ border: '1px solid black', width: '21mm' }}>
              <span style={{display: 'inline-grid',textAlign: 'center', fontWeight: 800, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }}>Кількість, штук</span>
            </div>
            <div style={{ border: '1px solid black', width: '26mm' }}>
              <span style={{display: 'inline-grid',textAlign: 'center', fontWeight: 800, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }}>Ціна, грн.</span>
            </div>
          </div>
          <div style={{ border: '1px solid black', height: '3px' }} />
        </div>
        <div style={{ border: '1px solid black', borderTopWidth: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', wordBreak: 'break-word', minHeight: '5mm', }}>
            <div style={{border: '1px solid black', width: '8mm'}}>
              <span style={{display: 'inline-grid',textAlign: 'center', fontWeight: 400, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }}>
                {1}
              </span>
            </div>
            <div style={{border: '1px solid black', width: '64mm'}}>
              <span style={{display: 'inline-grid',paddingLeft: '5px', textAlign: 'start', fontWeight: 400, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }}>
                Послуги з комплексного обслуговування копій: чорно-білі відбитки
              </span>
            </div>
            <div style={{border: '1px solid black', width: '22mm'}}>
              <span style={{display: 'inline-grid',textAlign: 'center', fontWeight: 400, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }}>{client.bw_prev_counter.toLocaleString()}</span>
            </div>
            <div style={{border: '1px solid black', width: '22mm'}}>
              <span style={{display: 'inline-grid',textAlign: 'center', fontWeight: 400, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }}>
                {client.bw_current_counter.toLocaleString()}
              </span>
            </div>
            <div style={{border: '1px solid black', width: '21mm'}}>
              <span style={{display: 'inline-grid',textAlign: 'center', fontWeight: 400, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }}>
                {(client.bw_current_counter - client.bw_prev_counter).toLocaleString()}
              </span>
            </div>
            <div style={{border: '1px solid black', width: '26mm'}}>
              <span style={{display: 'inline-grid',textAlign: 'center', fontWeight: 400, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }}>
                {((client.bw_current_counter - client.bw_prev_counter) * client.bw_price).toFixed(2).toLocaleString()}
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', wordBreak: 'break-word', minHeight: '5mm', }}>
            <div style={{border: '1px solid black', width: '8mm'}}>
              <span style={{display: 'inline-grid',textAlign: 'center', fontWeight: 400, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }}>
                {2}
              </span>
            </div>
            <div style={{ border: '1px solid black', width: '64mm'}}>
              <span style={{display: 'inline-grid',paddingLeft: '5px', textAlign: 'start', fontWeight: 400, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }}>
                Послуги з комплексного обслуговування копій: повнокольорові відбитки
              </span>
            </div>
            <div style={{border: '1px solid black', width: '22mm' }}>
              <span style={{display: 'inline-grid',textAlign: 'center', fontWeight: 400, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }}>
                {client.color_prev_counter.toLocaleString()}
              </span>
            </div>
            <div style={{border: '1px solid black', width: '22mm' }}>
              <span style={{display: 'inline-grid',textAlign: 'center', fontWeight: 400, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }}>
                {client.color_current_counter.toLocaleString()}
              </span>
            </div>
            <div style={{border: '1px solid black', width: '21mm' }}>
              <span style={{display: 'inline-grid',textAlign: 'center', fontWeight: 400, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }}>
                {(client.color_current_counter - client.color_prev_counter).toLocaleString()}
              </span>
            </div>
            <div style={{border: '1px solid black', width: '26mm' }}>
              <span style={{display: 'inline-grid',textAlign: 'center', fontWeight: 400, width: '100%', height: '100%', fontSize: 'small', alignItems: 'center' }}>
                {((client.color_current_counter - client.color_prev_counter) * client.color_price).toFixed(2).toLocaleString()}
              </span>
            </div>
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
        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '10px' }}>
          <div style={{fontWeight: 800, fontSize: 'small'}} >Всього на сумму:</div>
          <div style={{fontWeight: 800, fontSize: 'small'}}>Сумма прописью</div>
          <div style={{fontWeight: 800, fontSize: 'small'}}>ПДВ: не передбачено</div>
          <div style={{marginTop: '5mm',fontSize: 'small'}}>Замовник претензій по об'ему, якості та строкам виконання робіт (надання послуг) не має.</div>
        </div>
        {/*печати + банковская информация сторон*/}
        <div style={{display: 'flex', flex: 1, flexDirection: 'row', marginTop: '5mm'}}>
          <div style={{display: 'flex',flexDirection: 'column', flex: 0.5, paddingRight: '15px'}}>
            <div style={{fontWeight: 800, fontSize: 'small'}}>Від Віконавця</div>
            <div style={{fontWeight: 800, fontSize: 'small', marginTop: '25px'}}>______________________________________</div>
            <div style={{fontWeight: 400, fontSize: 'smaller', textAlign: 'end'}}>М.І. Озаровський</div>
            <div style={{fontWeight: 400, fontSize: 'smaller', textAlign: 'start'}}>м.п.</div>
            <div style={{fontWeight: 800, fontSize: 'small', textAlign: 'center'}}>ФІЗИЧНА ОСОБА - ПІДПРИЕМЕЦЬ</div>
            <div style={{fontWeight: 800, fontSize: 'small', textAlign: 'center'}}>ОЗАРОВСЬКИЙ МАКСИМ ІГОРОВИЧ</div>
            <div style={{fontWeight: 400, fontSize: 'smaller', textAlign: 'start', marginTop: '20px'}}>61145, м.Харків, вул Новгородська, 4, кв.92</div>
            <div style={{fontWeight: 400, fontSize: 'smaller', textAlign: 'start',marginTop: '20px'}}>код ЄДРПО/ДРФО: 3253008234</div>
            <div style={{fontWeight: 400, fontSize: 'smaller', textAlign: 'start'}}>Р/р: 26003052119396 в АТ КБ ПриватБанк,</div>
            <div style={{fontWeight: 400, fontSize: 'smaller', textAlign: 'start', marginTop: '20px'}}>МФО: 351533</div>
          </div>
          <div style={{display: 'flex',flexDirection: 'column', flex: 0.5, paddingLeft: '15px'}}>
            <div style={{fontWeight: 800, fontSize: 'small'}}>Від Замовника</div>
            <div style={{fontWeight: 800, fontSize: 'small', marginTop: '25px'}}>______________________________________</div>
            <div style={{fontWeight: 400, fontSize: 'smaller', textAlign: 'end'}}>{client.name_with_initials}</div>
            <div style={{fontWeight: 400, fontSize: 'smaller', textAlign: 'start'}}>м.п.</div>
            <div style={{fontWeight: 800, fontSize: 'small', textAlign: 'center'}}>{client.organization_structure}</div>
            <div style={{fontWeight: 800, fontSize: 'small', textAlign: 'center'}}>{client.name_caps}</div>
            <div style={{fontWeight: 400, fontSize: 'smaller', textAlign: 'start', marginTop: '20px'}}>{client.adress}</div>
            <div style={{fontWeight: 400, fontSize: 'smaller', textAlign: 'start',marginTop: '20px'}}>код ЄДРПО/ДРФО: {client.edrpo_drfo}</div>
            <div style={{fontWeight: 400, fontSize: 'smaller', textAlign: 'start'}}>Р/р: {client.client_rr},</div>
            <div style={{fontWeight: 400, fontSize: 'smaller', textAlign: 'start', marginTop: '20px'}}>МФО: {client.mfo}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
