export default class AbstractView {
  get template() {
    throw new Error(`You have to define template for view!`);
  }

  render() {
    throw new Error(`You have to define template for view!`);
  }

  bind() {
    throw new Error(`You have to define template for view!`);
  }

  get element() {
    if ((!this._element) || (!this._element.firstElementChild)) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }
}