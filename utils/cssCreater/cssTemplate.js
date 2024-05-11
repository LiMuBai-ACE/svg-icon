const cssTemplate = (font, iconList) => {
  let result = `
@font-face {
  font-family: 'icon-font';
  src: url('data:application/x-font-woff2;charset=utf-8;base64,${font}') format('woff2');
}
.icon-font {
  font-family: 'icon-font' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;

  iconList.forEach((icon) => {
    const iconfont = `
.icon-${icon.name.replace(".svg", "")}:before {
  content: ${`"\\${icon.unicode}"`};
}

`;
    result = result + iconfont;
  });
  return result;
};

module.exports = cssTemplate;
