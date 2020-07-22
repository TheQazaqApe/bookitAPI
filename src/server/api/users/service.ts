import { User, IUser } from '../../models';
import { Errors } from '../../libs';
import jwt from 'jsonwebtoken';

export interface ISignIn {
    userName: string,
    password: string
}

const SECRET = process.env.SECRET || 'BAD_SECRET';

export async function SignIn(data: ISignIn) {
    const user: IUser | null = await User.findOne({
        phone: data.userName
    }).select('');

    console.log({...user});
    if (!user) throw Errors.Unauthorized;

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user.id }, SECRET, { expiresIn: '7d' });

    const withToken = {token, ...user};
    return omitPassword(user);
}

function omitPassword(user: IUser) {
    delete user.password;
    return user;
}