import Home from './HomePage/Home.js';
import Company from './CompanyPage/Company.js';
import Culture from './CulturePage/Culture.js';
import Service from './ServicePage/Service.js';
import Blog from './BlogPage/Blog.js';
import Post from './PostPage/Post.js';
import Jobs from './JobsPage/Jobs.js';
import Header from './components/Header.js';

const pathToRegex = (path) =>
  new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((result) => result[1]);

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    }),
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: '/', view: Home },
    { path: '/company/', view: Company },
    { path: '/culture/', view: Culture },
    { path: '/service/', view: Service },
    { path: '/blog/', view: Blog },
    { path: '/blog/:id', view: Post },
    { path: '/jobs/', view: Jobs },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.result !== null);

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));
  const header = new Header();
  const html = await view.getHtml();
  document.querySelector('#app').innerHTML = `
    ${header.getComponent()}
    ${html}
  `;
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
