import React from 'react';
import './styles.css';

export class Table extends React.Component {
  // RENDER

  render() {
    return (
      /* нужно разуплится с наполнением контента в табличку, сделать её пригодной для всех таблиц */
      <div>
        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0" /*border="0"*/>
            <thead>
              <tr>
                <th>Code</th>
                <th>Company</th>
                <th>Price</th>
                <th>Change</th>
                <th>Change %</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellPadding="0" cellSpacing="0" /*border = '0'*/>
            <tbody>
              <tr>
                <td> AAC</td>
                <td> AUSTRALIAN COMPANY </td>
                <td> $1.38</td>
                <td> +2.01</td>
                <td> -0.36 %</td>
              </tr>
              <tr>
                <td> AAD</td>
                <td> AUSENCO</td>
                <td> $2.38</td>
                <td> -0.01</td>
                <td> -1.36 %</td>
              </tr>
              <tr>
                <td> AAX</td>
                <td> ADELAIDE</td>
                <td> $3.22</td>
                <td> +0.01</td>
                <td> +1.36 %</td>
              </tr>
              <tr>
                <td> XXD</td>
                <td> ADITYA BIRLA</td>
                <td> $1.02</td>
                <td> -1.01</td>
                <td> +2.36 %</td>
              </tr>
              <tr>
                <td> AAC</td>
                <td> AUSTRALIAN COMPANY</td>
                <td> $1.38</td>
                <td> +2.01</td>
                <td> -0.36 %</td>
              </tr>
              <tr>
                <td> AAD</td>
                <td> AUSENCO</td>
                <td> $2.38</td>
                <td> -0.01</td>
                <td> -1.36 %</td>
              </tr>
              <tr>
                <td> AAX</td>
                <td> ADELAIDE</td>
                <td> $3.22</td>
                <td> +0.01</td>
                <td> +1.36 %</td>
              </tr>
              <tr>
                <td> XXD</td>
                <td> ADITYA BIRLA</td>
                <td> $1.02</td>
                <td> -1.01</td>
                <td> +2.36 %</td>
              </tr>
              <tr>
                <td> AAC</td>
                <td> AUSTRALIAN COMPANY</td>
                <td> $1.38</td>
                <td> +2.01</td>
                <td> -0.36 %</td>
              </tr>
              <tr>
                <td> AAD</td>
                <td> AUSENCO</td>
                <td> $2.38</td>
                <td> -0.01</td>
                <td> -1.36</td>
              </tr>
              <tr>
                <td> AAX</td>
                <td> ADELAIDE</td>
                <td> $3.22</td>
                <td> +0.01</td>
                <td> +1.36 %</td>
              </tr>
              <tr>
                <td> XXD</td>
                <td> ADITYA BIRLA</td>
                <td> $1.02</td>
                <td> -1.01</td>
                <td> +2.36 %</td>
              </tr>
              <tr>
                <td> AAC</td>
                <td> AUSTRALIAN COMPANY</td>
                <td> $1.38</td>
                <td> +2.01</td>
                <td> -0.36 %</td>
              </tr>
              <tr>
                <td> AAD</td>
                <td> AUSENCO</td>
                <td> $2.38</td>
                <td> -0.01</td>
                <td> -1.36 %</td>
              </tr>
              <tr>
                <td> AAX</td>
                <td> AELAIDE</td>
                <td> $3.22</td>
                <td> +0.01</td>
                <td> +1.36 %</td>
              </tr>
              <tr>
                <td> XXD</td>
                <td> ADITYA BIRLA</td>
                <td> $1.02</td>
                <td> -1.01</td>
                <td> +2.36 %</td>
              </tr>
              <tr>
                <td> AAC</td>
                <td> AUSTRALIAN COMPANY</td>
                <td> $1.38</td>
                <td> +2.01</td>
                <td> -0.36 %</td>
              </tr>
              <tr>
                <td> AAD</td>
                <td> AUSENCO</td>
                <td> $2.38</td>
                <td> -0.01</td>
                <td> -1.36 %</td>
              </tr>
              <tr>
                <td> AAX</td>
                <td> ADELAIDE</td>
                <td> $3.22</td>
                <td> +0.01</td>
                <td> +1.36 %</td>
              </tr>
              <tr>
                <td> XXD</td>
                <td> ADITYA BIRLA</td>
                <td> $1.02</td>
                <td> -1.01</td>
                <td> +2.36 %</td>
              </tr>
              <tr>
                <td> AAC</td>
                <td> AUSTRALIAN COMPANY</td>
                <td> $1.38</td>
                <td> +2.01</td>
                <td> -0.36 %</td>
              </tr>
              <tr>
                <td> AAD</td>
                <td> AUSENCO</td>
                <td> $2.38</td>
                <td> -0.01</td>
                <td> -1.36 %</td>
              </tr>
              <tr>
                <td> AAX</td>
                <td> ADELAIDE</td>
                <td> $3.22</td>
                <td> +0.01</td>
                <td> +1.36 %</td>
              </tr>
              <tr>
                <td> XXD</td>
                <td> ADITYA BIRLA</td>
                <td> $1.02</td>
                <td> -1.01</td>
                <td> +2.36 %</td>
              </tr>
              <tr>
                <td> AAC</td>
                <td> AUSTRALIAN COMPANY</td>
                <td> $1 .38</td>
                <td> +2.01</td>
                <td> -0.36 %</td>
              </tr>
              <tr>
                <td> AAD</td>
                <td> AUSENCO</td>
                <td> $2 .38</td>
                <td> -0.01</td>
                <td> -1.36 %</td>
              </tr>
              <tr>
                <td> AAX</td>
                <td> ADELAIDE</td>
                <td> $3.22</td>
                <td> +0.01</td>
                <td> +1.36 %</td>
              </tr>
              <tr>
                <td> XXD</td>
                <td> ADITYA BIRLA</td>
                <td> $1.02</td>
                <td> -1.01</td>
                <td> +2.36 %</td>
              </tr>
              <tr>
                <td> AAC</td>
                <td> AUSTRALIAN COMPANY</td>
                <td> $1.38</td>
                <td> +2.01</td>
                <td> -0.36 %</td>
              </tr>
              <tr>
                <td> AAD</td>
                <td> AUSENCO</td>
                <td> $2.38</td>
                <td> -0.01</td>
                <td> -1.36 %</td>
              </tr>
              <tr>
                <td> AAX</td>
                <td> ADELAIDE</td>
                <td> $3.22</td>
                <td> +0.01</td>
                <td> +1.36 %</td>
              </tr>
              <tr>
                <td> XX</td>
                <td> ADITYA BIRLA</td>
                <td> $1.02</td>
                <td> -1.01</td>
                <td> +2.36 %</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
