export default class AbstractView {
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
      })
    })
  }

  onBtnClick () {}
}