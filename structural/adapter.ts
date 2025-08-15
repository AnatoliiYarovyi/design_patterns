// Adapter Pattern Example in TypeScript
// Патерн Adapter дозволяє "підлаштувати" інтерфейс одного класу під інтерфейс, який очікує клієнт.

// Старий інтерфейс (наприклад, сторонній сервіс)
class OldLogger {
	logMessage(msg: string) {
		console.log(`OldLogger: ${msg}`);
	}
}

// Новий інтерфейс, який очікує клієнт
interface INewLogger {
	log(msg: string): void;
}

// Адаптер
class LoggerAdapter implements INewLogger {
	constructor(private oldLogger: OldLogger) {}

	log(msg: string): void {
		this.oldLogger.logMessage(msg);
	}
}

// Використання:
const oldLogger = new OldLogger();
const logger: INewLogger = new LoggerAdapter(oldLogger);
logger.log("Повідомлення через адаптер"); // OldLogger: Повідомлення через адаптер

/*
Пояснення:
- OldLogger має інший інтерфейс, ніж очікує клієнт.
- LoggerAdapter "підлаштовує" OldLogger під новий інтерфейс INewLogger.
- Клієнт працює з адаптером, не змінюючи старий код.
*/
