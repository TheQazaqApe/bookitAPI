"use strict";

export interface IError {
    name: string,
    status: number,
    message?: string | Object
}

export const ServerError: IError = {
    name: 'ServerError',
    status: 500
}

export const ResourceNotExist: IError = {
    name: 'ResourceNotExist',
    status: 404
}

export const InvalidBodyError: IError = {
    name: 'InvalidBodyError',
    status: 400
}

export const BadRequestError: IError = {
    name: 'BadRequestError',
    status: 400
}

export const CompanyNotFound: IError = {
    name: 'CompanyNotFound',
    status: 404
}

export const MongoosePopulateNotFound: IError = {
    name: 'MongoosePopulateNotFound',
    status: 500
}

export const Unauthorized: IError = {
    name: 'InvalidAuth',
    status: 401
}