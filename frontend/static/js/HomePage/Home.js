import AbstractView from '../views/AbstractView.js';

class Home extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('당근 팀');
  }

  async getHtml() {
    return `
        <h1>home</h1>
    `;
  }
}

export default Home;
