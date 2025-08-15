class PaymentService {
	payAmount(amount: number): void {
		console.log(`Payment of ${amount} processed.`);
	}
}

interface IPayment {
	pay(amount: number, currency: string): void;
}

class PaymentAdapter implements IPayment {
	constructor(private paymentService: PaymentService) {}

	pay(amount: number): void {
		this.paymentService.payAmount(amount);
	}
}

class LegacyPayment {
	process(amount: number, currency: string): void {
		console.log(`Payment of ${amount} processed ${currency}.`);
	}
}

class LegacyPaymentAdapter implements IPayment {
	constructor(private legacyPayment: LegacyPayment) {}

	pay(amount: number, currency: string): void {
		this.legacyPayment.process(amount, currency);
	}
}

const paymentService = new PaymentService();
const payment: IPayment = new PaymentAdapter(paymentService);
payment.pay(100, "UAH");

const legacyPayment = new LegacyPayment();
const legacy: IPayment = new LegacyPaymentAdapter(legacyPayment);
legacy.pay(200, "USD");
