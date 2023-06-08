function sumSalaries(salaries: { [key: string]: number }): number {
    let sum = 0;
    for (let person in salaries) {
      sum += salaries[person];
    }
    return sum;
  }
  const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  const sum = sumSalaries(salaries);
  console.log(sum); 