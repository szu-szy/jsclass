class Hero {
  #name;

  constructor(name, level){
    this.#name = name;
    this.level = level
  }

  greet(instance){
    
    return `${this.#name} says hello to ${instance.name}`
  }

  get name(){
    return this.#name;
  }

  set name(newName){
    this.#name = newName
  }


}

const hero1 = new Hero('geronimo', 1)

class King extends Hero {
  constructor(name, level, surname){
    super(name, level)
    this.surname = surname;
  }

  hello(){
    return`${this.level}`
  }
}

const king = new King('arthuir', 10, 'ebebebe');

hero1.name = '111';

console.log(king.name)