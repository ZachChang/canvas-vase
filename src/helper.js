export const randomColor = () => {
    let o = Math.round, r = Math.random, s = 255;
    return `rgba(${o(r()*s)}, ${o(r()*s)}, ${o(r()*s)}, 0.6)`;
};
export const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }