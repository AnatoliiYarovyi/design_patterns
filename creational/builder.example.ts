interface Sandwich {
	bread: string;
	meat?: string;
	cheese?: string;
	vegetables?: string[];
	sauce?: string;
}

interface ISandwichBuilder {
	reset(): this;
	setBread(bread: string): this;
	setMeat(meat: string): this;
	setCheese(cheese: string): this;
	addVegetable(vegetables: string): this;
	removeVegetable(vegetable: string): this;
	setSauce(sauce: string): this;
	clone(): Sandwich;
	build(): Sandwich;
}

class SandwichBuilder implements ISandwichBuilder {
	private sandwich: Sandwich = { bread: "" };

	public reset() {
		this.sandwich = { bread: "" };
		return this;
	}

	public setBread(bread: string) {
		this.sandwich.bread = bread;
		return this;
	}

	public setMeat(meat: string) {
		this.sandwich.meat = meat;
		return this;
	}

	public setCheese(cheese: string) {
		this.sandwich.cheese = cheese;
		return this;
	}

	public addVegetable(vegetables: string) {
		if (!this.sandwich.vegetables) {
			this.sandwich.vegetables = [];
		}
		this.sandwich.vegetables?.push(vegetables);
		return this;
	}

	public removeVegetable(vegetable: string) {
		if (this.sandwich.vegetables) {
			this.sandwich.vegetables = this.sandwich.vegetables.filter(
				(el) => el !== vegetable,
			);
		} else {
			throw new Error("vegetables weren't added");
		}

		return this;
	}

	public setSauce(sauce: string) {
		this.sandwich.sauce = sauce;
		return this;
	}

	public clone() {
		if (this.sandwich.bread === "") {
			throw new Error("bread is required");
		}
		const copy: Sandwich = JSON.parse(JSON.stringify(this.sandwich));
		return copy;
	}

	public build() {
		if (this.sandwich.bread === "") {
			throw new Error("bread is required");
		}
		const result = this.sandwich;
		this.reset();
		return result;
	}
}

const sandwich = new SandwichBuilder()
	.setBread("ciabatta")
	.setMeat("chicken")
	.addVegetable("tomato")
	.addVegetable("lettuce")
	.addVegetable("potato")
	.removeVegetable("potato")
	.setSauce("mayo");

console.log(sandwich.clone());
console.log(sandwich.build());
// { bread: 'ciabatta', meat: 'chicken', cheese: undefined, vegetables: ['tomato', 'lettuce'], sauce: 'mayo' }
