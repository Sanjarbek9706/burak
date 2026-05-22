/*L-TASK

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni 
chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin. 
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc".
*/

function reverseSentence(str: string) {
  let words: string[] = str.split(" ");

  let reverseWords: string[] = words.map(
    (word: string): string  => {
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