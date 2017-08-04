export default class AbstractController {
  constructor(view) {
    this.view = view;
  }

  init () {
    this.view.render();
    this.view.bind();
  }
}