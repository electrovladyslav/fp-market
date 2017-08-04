import StockView from "./StockView";
import WalletView from "./WalletView";
import AbstractController from "./AbstractController";

import dataStock from "./server-responce-mock.js";
import dataWallet from "./user-database-mock";

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
