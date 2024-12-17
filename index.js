class Hero {
    constructor(name, age){
    this.name = name;
    this.age = age;
    }
    
Attack(){
console.log('O herói atacou.');
    }
    
}   
class Wizard extends Hero {
    Attack(){
    console.log('O mago atacou usando mágia.');
    }
    
}
    class Warrior extends Hero {
    Attack(){
    console.log('O guerreiro atacou usando espada.');
    }
    
}
    class Monk extends Hero {
    Attack(){
    console.log('O monge atacou usando artes marciais.');
    }
    
}
    
    class Ninja extends Hero {
    Attack(){
    console.log('O ninja atacou usando shuriken.');
    }
    
}
    let heroOne = new Wizard('Jimin', 26);
    let heroTwo = new Ninja('Namjoon', 28);
    heroOne.Attack();
    heroTwo.Attack();