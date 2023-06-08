interface Animal {
    name: string;
    size: string;
    weight: number;
  }
  
  const animals: Animal[] = [
    {
      name: "cat",
      size: "small",
      weight: 5
    },
    {
      name: "dog",
      size: "small",
      weight: 10
    },
    {
      name: "lion",
      size: "medium",
      weight: 150
    },
    {
      name: "elephant",
      size: "big",
      weight: 5000
    }
  ];
  
  // Tạo mảng mới chứa tên tất cả con vật
  const animalNames: string[] = animals.map((animal: Animal) => animal.name);
  
  // Tạo mảng mới lọc những con vật có cân nặng dưới 150
  const lightAnimals: Animal[] = animals.filter((animal: Animal) => animal.weight < 150);
  
  // Tính tổng cân nặng của tất cả con vật
  const totalWeight: number = animals.reduce((acc: number, animal: Animal) => acc + animal.weight, 0);
  
  // Tính tổng cân nặng của tất cả con vật có cân nặng dưới 150
  const totalLightWeight: number = animals.filter((animal: Animal) => animal.weight < 150).reduce((acc: number, animal: Animal) => acc + animal.weight, 0);

  
  const totalWeightAnimals: number = animals
  .filter(animal => animal.weight < 150)
  .reduce((sum, animal) => sum + animal.weight, 0);

console.log("tổng cân nặng của tất cả các con vật có cân nặng dưới 150", totalWeightAnimals);