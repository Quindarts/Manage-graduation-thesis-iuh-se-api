import Joi from 'joi';
export interface ISortText {
	value: string;
	required?: boolean;
}

export default class SortText {
	public static validate(props: ISortText): string {
		// allow null
		if (props.required == false && !props.value) return props.value;

		const schema = Joi.string().required().max(255);
		const { error, value } = schema.validate(props.value);

		if (error) throw new Error(error?.message.replace(/"/g, '').trim());

		return value;
	}
}
