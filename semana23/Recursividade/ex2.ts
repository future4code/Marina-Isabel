const sumNumbers = (n:number): number =>{
    if(n === 0) {
        return 
    }
    return sumNumbers(n - 1)
}

console.log(sumNumbers(10));

//  Certo -->
// export const calculateSumTo = (n: number, acc: number = 0): number => {
//     if (n === 0) {
//       return acc;
//     }
//     return calculateSumTo(n - 1, acc + n);
//   };

