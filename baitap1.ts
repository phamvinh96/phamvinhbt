function getFullName(): string {
  const firstName: string = 'phạm phước';
  const lastName: string = 'vĩnh';

  return `${firstName} ${lastName}`;
}

const myFullName: string = getFullName();
console.log(`My name is ${myFullName}.`);