function Card(props) {
  return `
    <article class="card__wrapper">
        <img alt="card-img" src="${props.thumbnailImg}" class="card__image"/>
        <div class="card__body">
            <h3>${props.title}</h3>
            <p>${props.subTitle}</p>
        </div>
        <div class="card__samlltagbox">
            <div class="card__smalltag">${props.catergories}</div>
        </div>
    </article>
    `;
}

export default Card;
