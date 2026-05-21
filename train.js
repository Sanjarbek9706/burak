/*L-TASK

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni 
chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin. 
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc".
*/
function reverseSentence(str) {
  let words = str.split(" ");

  let reverseWords = words.map(
    (word) => {
      return word
        .split("")
        .reverse()
        .join("");
    },
  );
  return reverseWords.join(" ");
}

console.log(
  reverseSentence("bormisan jo'ra"),
);
