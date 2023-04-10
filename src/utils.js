function componentToHex(c) {
  return c.toString(16).padStart(2, '0');
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbToHex;
