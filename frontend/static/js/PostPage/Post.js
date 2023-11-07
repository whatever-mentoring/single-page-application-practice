import AbstractView from '../views/AbstractView.js';

class Post extends AbstractView {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.setTitle(this.postId);
  }

  async getArticle() {
    const response = await fetch(`http://localhost:3000/api/article/${this.params.id}`);
    return response.json();
  }

  async getHtml() {
    const articleData = await this.getArticle();
    console.log(articleData);
    return `
      <div class="post__wrapper">
        <article class="post_article">
          <div class="post__title">
            <h1>${articleData.title}</h1>
            <div>${articleData.createdAt}</div>
          </div>
          <div class="post__image">
            <img alt="post-image" src="${articleData.thumbnailImg}"/>
          </div>
          <p>
            ${articleData.content}
          </p>
        </article>
      </div>
    `;
  }
}

export default Post;
