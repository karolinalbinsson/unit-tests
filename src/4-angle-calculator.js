export const angleCalculator = (turns) => {
  switch (turns) {
    case 0:
      return 0;

    case 1:
      return 360;

    case 1.5:
      return 540;

    case 2:
      return 720;
  }
}