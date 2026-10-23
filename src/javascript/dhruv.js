class Dhruv {
    constructor(name, age, school, standard) {
        this.name = name;
        this.age = age;
        this.school = school;
        this.standard = standard;

    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am in ${this.standard} at ${this.school}.`.toUpperCase());
    }
}

export default Dhruv;