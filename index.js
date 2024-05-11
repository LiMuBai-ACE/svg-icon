const fs = require("fs");
const fontCreator = require("./utils/fontCreator");
const cssCreater = require("./utils/cssCreater/index");

fontCreator("./svgs").then((res) => {
  const { buffers, iconList } = res;
  const fontBase64 = buffers.woff2.toString("base64");
  cssCreater(fontBase64, iconList);
});
