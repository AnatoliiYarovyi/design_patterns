// Facade Pattern Example in TypeScript
// Патерн Facade спрощує роботу з підсистемою, надаючи єдиний простий інтерфейс.

// Складна підсистема
export class AuthService {
	login(user: string, pass: string): boolean {
		console.log(`Auth: ${user}`);
		return user === "admin" && pass === "1234";
	}
}

export class LoggerService {
	log(message: string): void {
		console.log(`Log: ${message}`);
	}
}

export class PaymentService {
	pay(amount: number): void {
		console.log(`Payment: ${amount} UAH`);
	}
}

// Facade
export class AppFacade {
	private auth = new AuthService();
	private logger = new LoggerService();
	private payment = new PaymentService();

	makePayment(user: string, pass: string, amount: number): void {
		if (this.auth.login(user, pass)) {
			this.payment.pay(amount);
			this.logger.log(`User ${user} paid ${amount} UAH`);
		} else {
			this.logger.log(`Failed login for ${user}`);
		}
	}
}

// Використання:
const app = new AppFacade();
app.makePayment("admin", "1234", 500); // Auth, Payment, Log
app.makePayment("user", "wrong", 100); // Auth, Log

/*
Пояснення:
- Facade приховує складність підсистеми і надає простий інтерфейс для клієнта.
- Клієнт працює лише з фасадом, не знаючи про внутрішню логіку.
*/
