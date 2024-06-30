export function setImage(target, data) {
  target.src = `./assets/${data.name.toLowerCase()}.jpeg`;
  target.alt = data.alt;
}
