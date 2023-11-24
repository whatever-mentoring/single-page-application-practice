class Footer {
  getComponent() {
    const SnsList = [
      {
        id: 0,
        name: 'github',
        path: '/static/assets/github.svg',
      },
      {
        id: 1,
        name: 'medium',
        path: '/static/assets/medium.svg',
      },
      {
        id: 2,
        name: 'facebook',
        path: '/static/assets/facebook.svg',
      },
      {
        id: 3,
        name: 'instagram',
        path: '/static/assets/instagram.svg',
      },
    ];

    const address = '주소 : 서울특별시 서초구 강남대로 465, 교보강남타워 11층';

    return `
        <div class="footer__wrapper">
            <div class="footer__container">
                <section class="footer__nav">
                    <ul>
                        <li class="footer__nav__link">
                            <a href="https://daangn.notion.site/2b7689002cd847d78155695b5b194838">
                                <h4>개인정보처리방침</h4>
                                <img src="/static/assets/external.svg" />
                            </a>
                        </li>
                        <li class="footer__nav__link">
                            <a href="https://daangn.notion.site/2b7689002cd847d78155695b5b194838">
                                <h4>개인정보처리방침</h4>
                                <img src="/static/assets/external.svg" />
                            </a>
                        </li>
                        <li class="footer__nav__link">자주 묻는 질문</li>
                        <li class="footer__nav__link">IR</li>
                        <li class="footer__nav__link">PR</li>
                    </ul>
                    <ul class="sns__box">
                        ${SnsList.map((sns) => {
                          return `<img class="sns__link" key=${sns.id} alt=${sns.name} src=${sns.path} />`;
                        }).join('')}
                    </ul>
                </section>
                <section class="footer__information">
                    <div class="footer__information__box">
                        <p class="footer__information__address">${address}</p>
                        <p>
                        (IR 관련 문의 : <a class="footer__contact" href="mailto:ir@daangn.com">ir@daangn.com</a>)
                        </p>
                    </div>
                    <p>
                        (채용 관련 문의 : <a class="footer__contact" href="mailto:recruit@daangn.com">recruit@daangn.com</a>)
                    </p>
                    <p class="corporate__name">
                        © 당근마켓
                    </p>   
                </section>
            </div>
        </div>
        `;
  }
}

export default Footer;
