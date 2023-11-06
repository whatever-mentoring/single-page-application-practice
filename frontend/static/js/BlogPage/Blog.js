import AbstractView from '../views/AbstractView.js';

class Blog extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('당근 팀 블로그');
  }

  async getHtml() {
    return `
        <h1>blog</h1>
    `;
  }
}

export default Blog;
