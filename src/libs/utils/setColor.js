import { setRandom } from "./setRandom";

export const setColor = (colors) => {
  return colors[setRandom(0, 3)];
};
