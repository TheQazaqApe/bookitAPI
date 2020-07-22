import * as Errors from './errors';
import Joy from 'joi';

export function InvalidBody(error: Joy.ValidationError) {
    if (error == null) return;
    const obj = { ...Errors.InvalidBodyError };
    obj.message = error.details.map(item => item.message);
    return obj;
}