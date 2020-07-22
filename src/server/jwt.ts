import expressJwt from 'express-jwt';

export default () => {
    const SECRET = process.env.SECRET || 'BAD_SECRET';
    return expressJwt({ secret: SECRET, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/v1/api/users/signIn',
            '/v1/api/users/signUp'
        ]
    });
}