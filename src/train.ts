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

//  function calculateSumOfNumbers(arr: any[]): number {
//     let yigindi = 0;

//     for (let element of arr) {
//         if (typeof element === "number") {
//              yigindi = yigindi + element
//         }
//     }

//     return yigindi;
// }

// const natija = calculateSumOfNumbers([10, "10", {son: 10}, true, 35]);
// console.log(natija);

/*
  P-TASK

Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib
 arrayni qaytarsin. MASALAN: objectToArray({a: 10, b: 20}) 
 return [["a", 10], ["b", 20]].
 */
// function objectToArrayManual(obj: Record<string, any>): [string, any][] {
//     const result: [string, any][] = [];

//     for (const key in obj) {
//         if (Object.prototype.hasOwnProperty.call(obj, key)) {
//             result.push([key, obj[key]]);
//         }
//     }
//     return result;
// }

// const res = objectToArrayManual({ a: 50, b: 77 });
// console.log(res);

/*Q-TASK

Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, 
ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin. 
MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; 
hasProperty({name: "BMW", model: "M3"}, "year") return false.
*/

// function hasProperty(obj: Record<string, any>, prop: string): boolean {
//     return prop in obj;
// }

// const car = { name: "BMW", model: "M3" };
// console.log(hasProperty(car, "model"));
// console.log(hasProperty(car, "year")); 

// const user = { id: 1, username: "admin", isActive: true };
// console.log(hasProperty(user, "username")); 
// console.log(hasProperty(user, "password")); 

/*
 R-TASK

Shunday function yozing, u string parametrga ega bolsin.
 String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini 
 number holatda qaytarsin. MASALAN: calculate("1+3") return 4. 
 */
// function calculate(expression: string): number {
//     const parts = expression.split('+');
//     const firstNumber = Number(parts[0]);  
//     const secondNumber = Number(parts[1]); 
//     return firstNumber + secondNumber;
// }

// console.log(calculate("1+3")); 
// console.log(calculate("10+20")); 

/* 
S-TASK

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin 
va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin. 
MASALAN: missingNumber([3, 0, 1]) return 2.
*/

// function missingNumber(nums: number[]): number {
//   const n: number = nums.length;
  
//   //  0 dan n gacha bo'lgan sonlarning kutilayotgan idyalRaqam yig'indisi!
//   const idyalRaqam: number = (n * (n + 1)) / 2;
  
//   //  Array ichidagi bor bo'lgan sonlarning haqiqiy yig'indisi!
//   const actualRaqam: number = nums.reduce((sum: number, num: number) => sum + num, 0);
  
//   //  O'rtadagi farq — tushib qolgan son!
//   return idyalRaqam - actualRaqam;
// }


// const array1: number[] = [3, 0, 1];
// console.log(missingNumber(array1)); 

// const array2: number[] = [9, 6, 2, 8, 3, 5, 7, 0, 1];
// console.log(missingNumber(array2)); 

/*
T-TASK

Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin 
va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.
 MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]) return [0,3,4,4,6,30,31].
 */

//  function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//     const combinedArray = [...arr1, ...arr2];
    
//     return combinedArray.sort((a, b) => a - b);
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); 


/*
U-TASK

Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi 
faqat toq sonlar nechtaligini return qilsin. MASALAN: sumOdds(9) return 4; sumOdds(11) return 5. 
*/

// function sumOdds(number: number): number {
//     let count: number = 0;
    
//     for (let i: number = 1; i < number; i++) {
//         if (i % 2 !== 0) {
//             count++;
//         }
//     }
    
//     return count;
// }

// console.log("shu raqamgacha bo'lgan toq sonlar: ", sumOdds(11), "number:", sumOdds(13)); 

/* V-TASK

Shunday function yozing, uni string parametri bolsin va stringdagi harf va 
u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin. 
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}.
*/

// function countChars(str: string): Record<string, number> {
//     const result: Record<string, number> = {};

//     for (const char of str) {
//         result[char] = (result[char] || 0) + 1;
//     }

//     return result;
// }

// console.log(countChars("Sanjarbek"));

/* W-TASK

Shunday function yozing, uni array va number parametrlari bolsin.
 Function arrayni numberda berilgan uzunlikda kesib bolaklarga
  ajratilgan array holatida qaytarsin.
   MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3)
    return [[1,2,3], [4,5,6], [7,8,9], [10]]. */

// function chunkArray(arr: any[], size: number): any[][] {
//     const result: any[][] = [];

//     for (let i: number = 0; i < arr.length; i += size) {
//         const chunk: any[] = arr.slice(i, i + size);
//         result.push(chunk);
//     }

//     return result;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 6, 8, 11], 4));


// function blaklargaBolish(arr: any[], size: number): any[][] {
//     const natija: any[][] = [];
//     let hozirgiBolak: any[] = []; 

//     for (let i: number = 0; i < arr.length; i++) {
//         hozirgiBolak.push(arr[i]);

//         if (hozirgiBolak.length === size || i === arr.length - 1) {
//             natija.push(hozirgiBolak); 
//             hozirgiBolak = []; 
//         }
//     }

//     return natija;
// }

// console.log(blaklargaBolish([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));


/* X-TASK

Shunday function yozing, uni object va string parapetrlari bolsin.
 Function string parametri object ichida necha marotaba takrorlanganligini 
 qaytarsin (nested object bolsa ham sanasin). 
 MASALAN: countOccurrences({model: 'Bugatti', 
 steer: {model: 'HANKOOK', size: 30}}, 'model') return 2.  */

//  function countOccurrences(obj: Record<string, any>, targetStr: string): number {
//     let count = 0;

//     if (typeof obj !== 'object' || obj === null) {
//         return 0;
//     }

//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             if (key === targetStr) {
//                 count++;
//             }

//             if (typeof obj[key] === 'object' && obj[key] !== null) {
//                 count += countOccurrences(obj[key], targetStr);
//             }
//         }
//     }

//     return count;
// }

// const car = {
//     model: 'Bugatti', 
//     steer: {
//         model: 'HANKOOK', 
//         size: 30
//     }
// };

// console.log(countOccurrences(car, 'model')); 


/*
Y-TASK

Shunday function yozing, uni 2 ta array parapetri bolsin.
 Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin.
  MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3].
*/

function findIntersection<T>(arr1: T[], arr2: T[]): T[] {
    const set1 = new Set<T>(arr1);
    const intersection = arr2.filter(element => set1.has(element));
    
    return Array.from(new Set<T>(intersection));
}


//  Sonlar bilan (number[]):
const numbers1 = [1, 2, 3];
const numbers2 = [3, 2, 0];
const result1 = findIntersection(numbers1, numbers2); 
console.log(result1); 

//  Matnlar bilan (string[]):
const words1 = ["olma", "anor", "behi"];
const words2 = ["behi", "bitta", "olma"];
const result2 = findIntersection(words1, words2);
console.log(result2); 