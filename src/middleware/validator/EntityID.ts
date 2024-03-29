import Joi from 'joi';
export interface IEntityId {
	value: any;
	required?: boolean;
}

export default class EntityId {
	public static validate(props: IEntityId) {
		// allow null
		if (props.required == false && !props.value) return undefined;

		const schema = Joi.number().required().min(1).max(Number.MAX_SAFE_INTEGER);

		const { error, value } = schema.validate(props.value);

		if (error) throw new Error(error?.message.replace(/"/g, '')?.trim());

		return value;
	}
}
