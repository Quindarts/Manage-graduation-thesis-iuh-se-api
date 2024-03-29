import Joi from "joi";
import { TypeLevelTopic } from "src/schema/entities/Topic";
export interface IEvaluation {
  value: any;
  required?: boolean;
}

export default class TypeLevelTopicValidate {
  public static validate(props: IEvaluation) {
    // allow null
    if (props.required == false && !props.value) return props.value;

    const schema = Joi.string()
      .valid(...Object.values(TypeLevelTopic))
      .required();
    const { error, value } = schema.validate(props.value);

    if (error) throw new Error(error?.message.replace(/"/g, "").trim());

    return value;
  }
}
