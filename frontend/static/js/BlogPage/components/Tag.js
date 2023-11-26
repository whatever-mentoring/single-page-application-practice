function Tag(props) {
  const { text, isActive } = props;
  return `
    <div class="tag__wrapper" style="color: ${isActive ? '#ffffff' : ''}; background-color: ${
      isActive ? '#212124' : ''
    }; font-weight: ${isActive ? '600' : ''};">${text}</div>
  `;
}

export default Tag;
