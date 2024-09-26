import "dotenv/config";
import jsonwebtoken from "jsonwebtoken";
import { SucceededAuth } from "../../domain/aggregates/user/types/authenticationResult";

class JwtService {
    public static generateToken = (auth: SucceededAuth): string => {
        const secret = process.env.APP_SECRET_KEY;
        const token = jsonwebtoken.sign(
            { userId: auth.userId },
            secret!,
            { expiresIn: '1 day' }
        );

        return token;
    };
}

export default JwtService;