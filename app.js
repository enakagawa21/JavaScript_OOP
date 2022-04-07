console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


class Person{
    constructor (name, pets, residence, hobbies){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;

}
    info(){
        console.log (`${this.name} has ${this.pets} pet(s) lives in ${this.residence} and enjoys ${this.hobbies}.`)
    }
    greeting(name = "Barry"){ //saying hello to the Coder
        console.log(`Hello ${name}!`)

}
}
class Coder extends Person{

    constructor(name, pets, residence, hobbies){
    super(name, pets, residence, hobbies);
    
    this.occupation = "Full Stack Developer"

}

info(){
    console.log (`${this.name} has ${this.pets} pet(s) lives in ${this.residence} and enjoys ${this.hobbies}. Barry works as a ${this.occupation}.`)}

 greeting( name = "Eric"){ //Saying hello to the Person

   console.log (`Hello, ${name}`)
  
 }
    }



const Eric = new Person("Eric", "6", "Sacramento", ["basketball, football, baseball"])

const Barry = new Coder( "Barry" , "1", "portland", ["baseball, golf, ultimate frisbee"])

Eric.info()
Barry.info()

Eric.greeting()
Barry.greeting()