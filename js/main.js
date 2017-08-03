import StockView from "./StockView";
import WalletView from "./WalletView";
import dataStock from "./server-responce-mock.js";
import dataWallet from "./user-database-mock";

const stock = new StockView(dataStock);
stock.render();

const wallet = new WalletView(dataWallet);
wallet.render();