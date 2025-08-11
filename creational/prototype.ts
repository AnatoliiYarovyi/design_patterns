// Prototype Pattern Example in TypeScript
// Патерн Prototype дозволяє створювати нові об'єкти шляхом клонування існуючих, а не через new.

interface IPrototype {
	clone(): DocumentProto;
}

class DocumentProto implements IPrototype {
	constructor(
		public title: string,
		public content: string,
		public meta: { author: string; date: string },
	) {}

	clone(): DocumentProto {
		return new DocumentProto(
			this.title,
			this.content,
			JSON.parse(JSON.stringify(this.meta)),
		);
	}
}

// Використання:
const original = new DocumentProto("Звіт", "Дані звіту...", {
	author: "Ivan",
	date: "2025-08-09",
});
const copy = original.clone();
copy.title = "Копія звіту";
copy.meta.author = "Petro";

console.log(original); // title: "Звіт", author: "Ivan"
console.log(copy); // title: "Копія звіту", author: "Petro"

/*
Пояснення:
- Метод clone() створює новий об'єкт на основі існуючого.
- Можна змінювати копію незалежно від оригіналу.
- Використовується, коли створення об'єкта через new складне або ресурсоємне.
*/
