// Decorator Pattern Example in TypeScript
// Патерн Decorator дозволяє "обгортати" об'єкти новою поведінкою, не змінюючи їхній код.

export interface IMessage {
	send(): string;
}

class SimpleMessage implements IMessage {
	constructor(private text: string) {}
	send(): string {
		return this.text;
	}
}

// Декоратори

// Base Decorator
abstract class MessageDecorator implements IMessage {
	protected wrappee: IMessage;
	constructor(message: IMessage) {
		this.wrappee = message;
	}
	send(): string {
		return this.wrappee.send();
	}
}

// Concrete Decorators
class UppercaseDecorator extends MessageDecorator {
	send(): string {
		return super.send().toUpperCase();
	}
}

class ExclamationDecorator extends MessageDecorator {
	send(): string {
		return `${super.send()}!!!`;
	}
}

class TimestampDecorator extends MessageDecorator {
	send(): string {
		return `[${new Date().toISOString()}] ${super.send()}`;
	}
}

// Використання:
const simple = new SimpleMessage("hello world");
const upper = new UppercaseDecorator(simple);
const excited = new ExclamationDecorator(upper);
const withTime = new TimestampDecorator(simple);

console.log(simple.send()); // hello world
console.log(upper.send()); // HELLO WORLD
console.log(excited.send()); // HELLO WORLD!!!
console.log(withTime.send()); // [2025-08-16T12:34:56.789Z] hello world

/*
Пояснення:
- Декоратори обгортають базовий об'єкт і змінюють/додають поведінку.
- Можна комбінувати декоратори для складних ефектів.
- Оригінальний клас не змінюється.
*/
