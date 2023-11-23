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

  async getCategories() {
    const response = await fetch('http://localhost:3000/api/categories');
    return response.json();
  }

  async getHtml() {
    const { data } = await this.getArticles();
    const { categories } = await this.getCategories();

    return `
        <div class="blog__wrapper">
          <a href="/blog/${data[0].articleId}" data-link>
            ${MainCard(data[0])}
          </a>
          <div class="tag__box">
            ${categories
              .map((category) => {
                const isActive = window.location.pathname === category.path;
                return `
                <a href="${category.path}" data-link>
                  ${Tag({ text: category.text, isActive })}
                </a>
              `;
              })
              .join('')}
          </div>
          <div class="card__box">
          ${
            data
              .filter((article) => {
                const isActive = window.location.pathname === article.categories;
                return isActive;
              })
              .map(
                (article) => `
              <a href="/blog/${article.articleId}" data-link>
                ${Card(article)}
              </a>
            `,
              )
              .join('') ||
            data
              .map(
                (article) => `
              <a href="/blog/${article.articleId}" data-link>
                ${Card(article)}
              </a>
            `,
              )
              .join('')
          }
          </div>
        </div>
    `;
  }
}

export default Blog;
