class Person {
	constructor(name = 'Anonymous', age = 0){
		this.name = name,
		this.age = age
	}
	getGreeting(){
		// return 'Hi. I am ' + this.name + '!'
		//Template string:
		return `Hi. I am ${this.name}!`
	}
	getDescription(){
		return `${this.name} is ${this.age} old.`
	}
}

class Student extends Person {
	constructor(name, age, major){
		super(name, age)
		this.major = major
	}
	hasMajor(){
		return !!this.major
	}
	getDescription(){
		let description = super.getDescription()

		description += ` Has a major in ${this.major}.`

		return description
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation){
		super(name, age)
		this.homeLocation = homeLocation
	}
	getGreeting(){
		let greeting = super.getGreeting()
		greeting += ` I'm visiting from ${this.homeLocation}`
		return greeting
	}
}

const me = new Student('Erick Ponce', 25, 'Electronic Engineer');
console.log(me.getGreeting())

const other = new Traveler('Gemma', 27, 'Chihuahua')
console.log(other.getGreeting())