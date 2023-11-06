import AbstractView from '../views/AbstractView.js';

class Service extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('당근 서비스');
  }

  async getHtml() {
    return `
        <h1>service</h1>
    `;
  }
}

export default Service;
