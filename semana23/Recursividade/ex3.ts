const num = [1, 2, 3, 4, 5]

const arrayNumbers = (arr: number[], i: number = arr.length -1) => {
    if (i >=0){
        arrayNumbers(arr, i-1)
        console.log(arr[i])
    }
}

arrayNumbers(num)

// Certo--->
// export const printArray = (arr: number[], i: number = arr.length - 1) => {
//     if (i >= 0) {
//       printArray(arr, i - 1);
//       console.log(`Elemento ${i}: `, arr[i]);
//     }
//   };
  
//   // Exemplo de uso:
//   const array = [1, 2, 3, 4];
//   printArray(array);