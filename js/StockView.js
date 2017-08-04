import AbstractView from "./AbstractView";


export default class StockView extends AbstractView {
  constructor(data) {
    super( data);
    this._container = document.querySelector(`.main-table__tbody--stock`)
  }
  
  get template () {
    let rows = ``;
    this._data.Stocks.Items.forEach((item) => {
      rows += `<tr>
<td>${item.Code}</td>
<td>${item.Price}</td>
<td class="main-table__td-btn"><button class="main-table__btn main-table__btn--buy" 
data-stock="${item.Code}">Buy</td>
      </tr>`;
    });
     return rows;

  }
  render() {
    document.querySelector(`.main-table__tbody--stock`).innerHTML = this.template;
  }
}
