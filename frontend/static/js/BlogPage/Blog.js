import AbstractView from '../views/AbstractView.js';
import MainCard from './components/MainCard.js';
import Tag from './components/Tag.js';
import Card from './components/Card.js';
class Blog extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('당근 팀 블로그');
  }

  async getArticles() {
    const response = await fetch('http://localhost:3000/api/articles');
    return response.json();
  }

  async getHtml() {
    const { data } = await this.getArticles();

    const categories = [
      { id: 0, text: '전체', path: '/blog/#_filter' },
      { id: 1, text: '문화', path: '/blog/category/culture/#_filter' },
      { id: 2, text: '서비스', path: '/blog/category/service/#_filter' },
      { id: 3, text: '커리어', path: '/blog/category/career/#_filter' },
    ];

    return `
        <div class="blog__wrapper">
          <a href="/blog/${data[0].articleId}" data-link>
            ${MainCard(data[0])}
          </a>
          <div class="tag__box">
            ${categories
              .map((category) => {
                return `
                <a href="${category.path}">
                  ${Tag(category)}
                </a>
              `;
              })
              .join('')}
          </div>
          <div class="card__box">
              ${data
                .map((category) => {
                  const cardPath = category.articleId - 1;
                  return `
                  <a href="/blog/${data[cardPath].articleId}" data-link>
                    ${Card(category)}
                  </a>
                `;
                })
                .join('')}
          </div>
        </div>
    `;
  }
}

export default Blog;
