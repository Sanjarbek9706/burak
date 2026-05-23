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
/*
M-TASK
Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin 
va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib,
 hosil bolgan objectlarni array ichida qaytarsin.
  MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}].
  */

  interface SqureResult {
    number: number;
    square: number;
   }

  function getSquareNumbers(num: number[]): SqureResult[] {
    return num.map(n=> ({number: n, square: n*n}));
  }

  const naticha = getSquareNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  console.log(naticha);