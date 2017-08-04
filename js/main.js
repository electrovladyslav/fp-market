(function () {
'use strict';

class AbstractView {
  constructor(data) {
    this._data = data;
  }
  
  get template() {
    throw new Error(`You have to define template for view!`);
  }

  render() {
    throw new Error(`You have to define render for view!`);
  }

  bind () {
    const btns = this._container.querySelectorAll(`.main-table__btn`);
    btns.forEach((btn) => {
      
      btn.addEventListener(`click`, (event) => {
        event.preventDefault();
        this.onBtnClick(event.target);
      });
    });
  }

  onBtnClick () {}
}

class StockView extends AbstractView {
  constructor(data) {
    super( data);
    this._container = document.querySelector(`.main-table__tbody--stock`);
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

class WalletView extends AbstractView {
  constructor(data) {
    super( data);
    this._container = document.querySelector(`.main-table__tbody--wallet`);
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

class AbstractController {
  constructor(view) {
    this.view = view;
  }

  init () {
    this.view.render();
    this.view.bind();
  }
}

var dataStock = {
  "Stocks": {
    "PublicationDate": "2017-08-02T15:03:02.1914785Z",
    "Items": [
      {
        "Name": "Future Processing",
        "Code": "FP",
        "Unit": "1",
        "Price": "5.0975"
      },
      {
        "Name": "Fp Lab",
        "Code": "FPL",
        "Unit": "100",
        "Price": "3.7295"
      }
    ]
  }
};

var dataWallet = {
  "Stocks": {
    "PublicationDate": "2017-08-02T15:03:02.1914785Z",
    "Money": "1500",
    "Items": [
      {
        "Name": "Future Processing",
        "Code": "FP",
        "Unit": "1",
        "Price": "5.0975"
      },
      {
        "Name": "Fp Lab",
        "Code": "FPL",
        "Unit": "100",
        "Price": "3.7295"
      }
    ]
  }
};

const stock = new AbstractController (new StockView(dataStock));
stock.init();
stock.view.onBtnClick = (target) => {
  const amount = +window.prompt(`How many positions of ${target.dataset.stock} do you like to buy?`, 1);

  let confirmation;
  if (amount) {
     confirmation = window.confirm(`Confirm buying ${amount} position of ${target.dataset.stock}`);
  }

  if (confirmation === true) window.alert(`Ok!`);
};


const wallet = new AbstractController (new WalletView(dataWallet));
wallet.init();
wallet.view.onBtnClick = (target) => {
  const amount = +window.prompt(`How many positions of ${target.dataset.stock} do you like to sell?`, 1);

  let confirmation;
  if (amount) {
    const confirmation = window.confirm(`Confirm selling ${amount} position of ${target.dataset.stock}`);
  }

  if (confirmation === true) window.alert(`Ok!`);
};

}());

//# sourceMappingURL=main.js.map
