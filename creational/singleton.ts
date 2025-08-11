// Singleton Pattern Example in TypeScript
// Патерн Singleton гарантує, що клас має лише один екземпляр, і надає глобальну точку доступу до нього.

class Singleton {
	private static instance: Singleton;
	private constructor() {
		// Приватний конструктор не дозволяє створювати екземпляри напряму
	}

	public static getInstance(): Singleton {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}
		return Singleton.instance;
	}

	public someBusinessLogic() {
		return "Я працюю як Singleton!";
	}
}

// Використання:
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // true

console.log(singleton1.someBusinessLogic());

/*
Пояснення:
- Конструктор класу приватний, тому створити екземпляр напряму не можна.
- Метод getInstance() створює екземпляр лише один раз і повертає його при кожному виклику.
- Це гарантує, що у програмі буде лише один екземпляр Singleton.
*/

// --------------------------------------------------------
// Singleton через об'єкт модуля
// Приклад: об'єкт і функція, які експортуються з модуля

const obj = {
	state: true,
};

export function setState(newState: boolean) {
	obj.state = newState;
}

export function getState() {
	return obj.state;
}

/*
Пояснення:
- obj створюється один раз при завантаженні модуля.
- setState та getState працюють з одним і тим самим станом obj.
- Усі частини застосунку, які імпортують ці функції, працюють з одним "сінглтон-об'єктом".
*/

// --------------------------------------------------------
// Singleton через замикання (closure)
// Стан прихований у замиканні, доступ лише через функції

const createStateManager = () => {
	let state = true;
	return {
		setState(newState: boolean) {
			state = newState;
		},
		getState() {
			return state;
		},
	};
};

export const stateManager = createStateManager();

stateManager.setState(false);
console.log("stateManager.getState():", stateManager.getState()); // false

/*
Пояснення:
- state існує лише всередині замикання createStateManager.
- stateManager — це об'єкт з методами для роботи зі станом, і він є сінглтоном для всіх імпортів.
- Стан не можна змінити напряму, лише через setState/getState.
*/
