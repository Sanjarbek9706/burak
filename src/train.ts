/*L-TASK

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni 
chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin. 
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc".
*/

// function reverseSentence(str: string) {
//   let words: string[] = str.split(" ");

//   let reverseWords: string[] = words.map(
//     (word: string): string  => {
//       return word
//         .split("")
//         .reverse()
//         .join("");
//     },
//   );
//   return reverseWords.join(" ");
// }

// console.log(
//   reverseSentence("bormisan jo'ra"),
// );
/*
M-TASK
Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin 
va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib,
 hosil bolgan objectlarni array ichida qaytarsin.
  MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}].
  */

  // interface SqureResult {
  //   number: number;
  //   square: number;
  //  }

  // function getSquareNumbers(num: number[]): SqureResult[] {
  //   return num.map(n=> ({number: n, square: n*n}));
  // }

  // const naticha = getSquareNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  // console.log(naticha);

  /* N-TASK

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham,
 orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin. 
 MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false.
 */

// function palindromCheck(str: string): boolean {
//   if (
//     str.toLowerCase() === str.toLowerCase()
//       .split("")
//       .reverse()
//       .join(""))
//    {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(palindromCheck("bodring"));
// console.log(palindromCheck("non"));

/*
  O-TASK

Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va 
array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
 MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45.
 */

 function calculateSumOfNumbers(arr: any[]): number {
    let yigindi = 0;

    for (let element of arr) {
        if (typeof element === "number") {
             yigindi = yigindi + element
        }
    }

    return yigindi;
}

const natija = calculateSumOfNumbers([10, "10", {son: 10}, true, 35]);
console.log(natija);