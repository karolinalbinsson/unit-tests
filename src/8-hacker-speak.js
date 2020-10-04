export const hackerSpeak = (words) => {

  // words = words.toUpperCase();

  //replace A with 4
  words = words.replace(/a/gi, "4")
  //replace E with 3
  words = words.replace(/e/gi, "3")
  //replace i with 1
  words = words.replace(/i/gi, "1")
  //replace o with 0
  words = words.replace(/o/gi, "0")
  //replace S with 5
  words = words.replace(/s/gi, "5")

  return words
}