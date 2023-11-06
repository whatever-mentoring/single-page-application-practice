import AbstractView from '../views/AbstractView.js';

class Culture extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('당근 팀 문화');
  }

  async getHtml() {
    return `
        <h1>culture</h1>
    `;
  }
}

export default Culture;
