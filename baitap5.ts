function sumArray(arrayA: number[]): number {
    let sum = 0;
    for (let i = 0; i < arrayA.length; i++) {
      sum += arrayA[i];
    }
    return sum;
  }
  const arrayA = [5, 2, 6, 3, 8];
const sum = sumArray(arrayA);
console.log(sum); 