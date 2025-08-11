interface IMessage {
	send(): string;
}

class EmailMessage implements IMessage {
	constructor(private message: string) {}

	public send(): string {
		return `Відправлено email: ${this.message}`;
	}
}
class SmsMessage implements IMessage {
	constructor(private message: string) {}

	public send(): string {
		return `Відправлено sms: ${this.message}`;
	}
}
class PushMessage implements IMessage {
	constructor(private message: string) {}

	public send(): string {
		return `Відправлено push: ${this.message}`;
	}
}

// biome-ignore lint/complexity/noStaticOnlyClass: off
class MessageFactory {
	static createMessage({
		type,
		message,
	}: { type: "email" | "sms" | "push"; message: string }): IMessage {
		if (type === "email") {
			return new EmailMessage(message);
		}
		if (type === "sms") {
			return new SmsMessage(message);
		}
		if (type === "push") {
			return new PushMessage(message);
		}

		throw new Error("type is not correct");
	}
}

const message = MessageFactory.createMessage({
	type: "sms",
	message: "Вітаю з Factory!",
});
console.log(message.send()); // Відправлено sms: Вітаю з Factory!
