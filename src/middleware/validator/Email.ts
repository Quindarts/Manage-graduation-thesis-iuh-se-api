import Joi from 'joi';
export interface IEmail {
	value: any;
	required?: boolean;
}

export default class Email {
	public static validate(props: IEmail) {
		// allow null
		if (props.required == false && !props.value) return props.value;

		const schema = Joi.string().email().required().max(255);

		const { error, value } = schema.validate(props.value);

		if (error) throw new Error(error?.message.replace(/"/g, '').trim());

		return value;
	}
}
