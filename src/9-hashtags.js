export const hashtags = (text) => {
  let newWords = text.split(" ");
  let arrayToReturn = new Array();
  newWords.forEach(element => {
    if (element.charAt(0) === "#") {
      arrayToReturn.push(element);
    }
  });
  text = arrayToReturn;
  return text
}