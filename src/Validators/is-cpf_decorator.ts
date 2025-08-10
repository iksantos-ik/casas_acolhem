import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';
import { isValidCpf } from './CPF_validator';

export function IsCpf(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isCpf',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(document: string, _args: ValidationArguments) {
          return typeof document === 'string' && isValidCpf(document);
        },
        defaultMessage(_args: ValidationArguments) {
          return 'CPF inválido';
        },
      },
    });
  };
}
