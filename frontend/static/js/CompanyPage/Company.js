import AbstractView from '../views/AbstractView.js';

class Company extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('당근 회사 소개');
  }

  async getHtml() {
    return `
        <h1>company</h1>
    `;
  }
}

export default Company;
