import AbstractView from '../views/AbstractView.js';

class Jobs extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('당근 팀 채용');
  }

  async getHtml() {
    return `
        <h1>jobs</h1>
    `;
  }
}

export default Jobs;
