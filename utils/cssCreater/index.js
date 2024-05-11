const fse = require("fs-extra");
const fs = require("fs");
const { DEFAULT_OUTPUT } = require("../constant");
const cssTemplate = require("./cssTemplate");

const createIconFontCss = async (font, iconList) => {
  const path = `${DEFAULT_OUTPUT.path}/css`;
  await fse.emptyDir(path);
  await fs.writeFileSync(
    `${path}/${DEFAULT_OUTPUT.cssFileName}.css`,
    cssTemplate(font, iconList)
  );
};

module.exports = createIconFontCss;
