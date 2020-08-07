const color = {
  primary: "#0073ff",

  isLight(colorCode: string) {
    let code = colorCode;

    if (colorCode[0] === "#") {
      code = colorCode.slice(1);
    }

    const rgbAverage =
      [code.slice(0, 2), code.slice(2, 4), code.slice(4, 6)]
        .map((v) => parseInt(v, 16))
        .reduce((a, b) => a + b, 0) / 3;
    return rgbAverage < 120;
  },
};

export default color;
