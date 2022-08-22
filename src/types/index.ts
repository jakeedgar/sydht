export const Nand = (A: boolean, B: boolean) => {
  if (A === false && B === false) {
    return true;
  } else {
    return false;
  }
};

export const Nand2 = (A: boolean, B: boolean) => {
  A === false && B === false ? true : false;
};
