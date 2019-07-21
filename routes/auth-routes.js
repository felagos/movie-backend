const router = require('express').Router();
const { validatLogin, validateRegister } = require('../middleware/auth-middleware');
const { STATUS_HTTP } = require('../utils/constants');
const AuthService = require('../services/auth-service');

router.post("/doLogin", validatLogin, async (req, res) => {
    const { email, password } = req["body"];
    try {
        const user = await AuthService.doLogin(email, password);
        res.status(STATUS_HTTP.OK).json({ data: user }).end();
    } catch (err) {
        res.status(STATUS_HTTP.UNAUTHORIZED).json({ message: err }).end();
    }
});

router.post("/doRegister", validateRegister, async (req, res) => {
    const { email, password, nick } = req["body"];
    try {
        const exists = await AuthService.existsEmail(email);
        if (!exists) {
            const user = await AuthService.doRegister(email, password, nick);
            res.status(STATUS_HTTP.CREATED).json({ data: user }).end();
        }
        else {
            res.status(STATUS_HTTP.ERROR).json({ message: "El email se encuentra registrado" });
        }
    } catch (err) {
        res.status(STATUS_HTTP.ERROR).json({ message: err });
    }
});

module.exports = router;