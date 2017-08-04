import AbstractView from "./AbstractView";


export default class WalletView extends AbstractView {
  constructor(data) {
    super( data);
    this._container = document.querySelector(`.main-table__tbody--wallet`)
  }

  get template () {
    let rows = ``;
    this._data.Stocks.Items.forEach((item) => {
      rows += `<tr>
<td>${item.Code}</td>
<td>${item.Unit}</td>
<td>${item.Price}</td>
<td>${item.Unit * item.Price}</td>
<td class="main-table__td-btn"><button class="main-table__btn main-table__btn--sell" 
data-stock="${item.Code}">Sell</td>
      </tr>`;
    });
     return rows;

  }
  render() {
    document.querySelector(`.main-table__tbody--wallet`).innerHTML = this.template;
    
    document.querySelector(`.main-table__money-value`).innerHTML = this._data.Stocks.Money;
  }

  
}
