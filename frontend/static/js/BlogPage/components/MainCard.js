function MainCard(props) {
  return `
    <div class="maincard__wrapper">
        <img alt="main-thumbnail" src="${props.thumbnailImg}" class="maincard__thumbnail"/>
        <div class="maincard__body">
            <h1>${props.title}</h1>
            <p>${props.subTitle}</p>
        </div>
    </div>
    `;
}

export default MainCard;
