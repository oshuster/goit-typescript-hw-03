/*
  Клас Student, який містить три властивості: name, age та grade. 
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення, 
  напишіть скорочену ініціалізацію.
*/

interface IStudent {
  name: string;
  age: number;
  grade: string;
}

class Student implements IStudent {
  constructor(public name: string, public age: number, public grade: string) {}
}

export {};
