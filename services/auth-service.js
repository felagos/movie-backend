const AuthMongo = require('../mongo/auth-mongo');
const crypto = require('bcrypt');

class AuthService {

    async doLogin(email, password) {
        try {
            const user = await AuthMongo.getUser(email);

            if (user) {
                const response = await crypto.compare(password, user.password);
                if (response) return user;

                throw new Error("Email y/o contraseña incorrecta");
            }

            throw new Error("Email y/o contraseña incorrecta");
        } catch (err) {
            throw new Error("Email y/o contraseña incorrecta");
        }

    }

    async existsEmail(email) {
        try {
            const projection = { _id: 0, password: 0 };
            const user = await AuthMongo.getUser(email, projection);
            
            return (user) ? true : false;

        } catch (e) {
            return true;
        }
    }

    async doRegister(email, password, nick) {
        try {
            const hashed = await crypto.hash(password, 10);
            const user = await AuthMongo.registerUser(email, hashed, nick);
            return user ? true : false;
        } catch (err) {
            throw new Error("Error");
        }

    }

}

module.exports = new AuthService();