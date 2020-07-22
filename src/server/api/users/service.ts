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

    if (!user) throw Errors.Unauthorized;

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user._id }, SECRET, { expiresIn: '7d' });
    return {token, phone: user.phone};
}

function omitPassword(user: IUser) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}