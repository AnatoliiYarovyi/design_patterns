// Builder Pattern Example in TypeScript
// Патерн Builder дозволяє поетапно створювати складні об'єкти, відокремлюючи конструювання від представлення.

class Product {
	public parts: string[] = [];
	public listParts(): void {
		console.log(`Product parts: ${this.parts.join(", ")}`);
	}
}

interface Builder {
	reset(): this;
	producePartA(): this;
	producePartB(): this;
	producePartC(): this;
	getResult(): Product;
}

class ConcreteBuilder implements Builder {
	private product: Product;

	constructor() {
		this.product = new Product();
	}

	reset(): this {
		this.product = new Product(); // reset the product for a new build
		return this;
	}

	producePartA(): this {
		this.product.parts.push("PartA");
		return this;
	}

	producePartB(): this {
		this.product.parts.push("PartB");
		return this;
	}

	producePartC(): this {
		this.product.parts.push("PartC");
		return this;
	}

	getResult(): Product {
		const result = this.product;
		this.product = new Product(); // reset for next build
		return result;
	}
}

// Використання:
const builder = new ConcreteBuilder();
const product1 = builder.producePartA().producePartB().getResult();
product1.listParts(); // Product parts: PartA, PartB

const product2 = builder.producePartA().producePartC().getResult();
product2.listParts(); // Product parts: PartA, PartC

/*
Пояснення:
- Builder дозволяє створювати різні варіації об'єкта Product, використовуючи один і той самий процес побудови.
- Кожен крок (producePartA, producePartB, producePartC) додає частину до продукту.
- Метод getResult повертає готовий продукт і скидає builder для наступного використання.
*/
