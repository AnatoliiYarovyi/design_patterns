// Factory Pattern Example in TypeScript
// Патерн Factory дозволяє створювати об'єкти певного типу без явного вказування класу, який буде створено.

interface IProduct {
	use(): void;
}

class ConcreteProductA implements IProduct {
	use() {
		console.log("Використовується продукт A");
	}
}

class ConcreteProductB implements IProduct {
	use() {
		console.log("Використовується продукт B");
	}
}

// Фабрика
// biome-ignore lint/complexity/noStaticOnlyClass: off
class ProductFactory {
	static createProduct(type: "A" | "B"): IProduct {
		if (type === "A") {
			return new ConcreteProductA();
		}
		if (type === "B") {
			return new ConcreteProductB();
		}
		throw new Error("Unknown product type");
	}
}

// Використання:
const productA = ProductFactory.createProduct("A");
productA.use(); // Використовується продукт A

const productB = ProductFactory.createProduct("B");
productB.use(); // Використовується продукт B

/*
Пояснення:
- ProductFactory створює об'єкти різних класів, не розкриваючи клієнту їхню реалізацію.
- Клієнт просто вказує тип продукту, а фабрика повертає відповідний екземпляр.
*/
