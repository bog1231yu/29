// 1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    static isAdult(age) {
        return age >= 18;
    }
}
const person = new Person("Alice", 25);
console.log(person.introduce());
console.log(Person.isAdult(17));

// 2
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a sound.`;
    }
}
class Dog extends Animal {
    speak() {
        return `${this.name} says: Woof!`;
    }
}
const dog = new Dog("Buddy");
console.log(dog.speak());

// 3
class Button {
    constructor(label, color) {
        this.label = label;
        this.color = color;
    }
    render(containerId) {
        const container = document.getElementById(containerId);
        const button = document.createElement("button");
        button.innerText = this.label;
        button.style.backgroundColor = this.color;
        container.appendChild(button);
    }
}
const button1 = new Button("Click Me", "blue");
const button2 = new Button("Submit", "green");
button1.render("container");
button2.render("container");

// 4
class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    describe() {
        return `This is a ${this.brand} running at ${this.speed} km/h.`;
    }
}
class Car extends Vehicle {
    constructor(brand, speed, model) {
        super(brand, speed);
        this.model = model;
    }
    describe() {
        return `${super.describe()} Model: ${this.model}.`;
    }
}
const car1 = new Car("Toyota", 120, "Corolla");
const car2 = new Car("Tesla", 150, "Model 3");
console.log(car1.describe());
console.log(car2.describe());

// 5
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    static filterByCategory(products, category) {
        return products.filter(product => product.category === category);
    }
}
const products = [
    new Product("Laptop", 1500, "electronics"),
    new Product("Phone", 800, "electronics"),
    new Product("Shirt", 40, "clothing")
];
console.log(Product.filterByCategory(products, "electronics"));

// 6
class Event {
    constructor(name, date) {
        this.name = name;
        this.date = new Date(date);
    }
    isUpcoming() {
        return this.date > new Date();
    }
}
const events = [
    new Event("Conference", "2024-12-30"),
    new Event("Workshop", "2024-12-20")
];
events.forEach(event => console.log(`${event.name}: ${event.isUpcoming()}`));

// 7
class Character {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
}
class Warrior extends Character {
    attack(target) {
        target.health -= 10;
        return `${this.name} attacks ${target.name}. ${target.name} now has ${target.health} health.`;
    }
}
const char1 = new Warrior("Thor", 100);
const char2 = new Warrior("Loki", 90);
console.log(char1.attack(char2));

// 8
class Task {
    constructor(title, completed, priority) {
        this.title = title;
        this.completed = completed;
        this.priority = priority;
    }
    toggleCompleted() {
        this.completed = !this.completed;
    }
    static filterByPriority(tasks, priority) {
        return tasks.filter(task => task.priority === priority);
    }
}
const tasks = [
    new Task("Do laundry", false, "low"),
    new Task("Pay bills", true, "high"),
    new Task("Buy groceries", false, "medium")
];
console.log(Task.filterByPriority(tasks, "high"));

// 9
class Appointment {
    constructor(title, date) {
        this.title = title;
        this.date = new Date(date);
    }
    isToday() {
        const today = new Date();
        return (
            this.date.getDate() === today.getDate() &&
            this.date.getMonth() === today.getMonth() &&
            this.date.getFullYear() === today.getFullYear()
        );
    }
}
const appointment = new Appointment("Dentist", new Date().toISOString());
console.log(appointment.isToday());
