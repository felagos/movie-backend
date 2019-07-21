const router = require('express').Router();
const { validateMyListPost, validateMyListGet } = require('../middleware/media-middleware');
const MediaService = require('../services/media-service');
const { STATUS_HTTP } = require('../utils/constants');

router.post("/", validateMyListPost, async (req, res) => {
    const data = req["body"];
    try {
        const response = await MediaService.savetoMyList(data);

        res.status(STATUS_HTTP.CREATED).json({ message: true });
    } catch (err) {
        res.status(STATUS_HTTP.ERROR).json({ message: "Se produjo un error al guardar los datos" });
    }
})

router.get("/:idUser", async (req, res) => {
    try {
        const { idUser } = req.params;
        const myList = await MediaService.getMyList(idUser);

        res.status(STATUS_HTTP.OK).json({ message: myList });
    } catch (err) {
        res.status(STATUS_HTTP.ERROR).json({ message: err });
    }
});

router.delete("/deleteFromList/:idMedia/:mediaType/:idUser", validateMyListGet, async (req, res) => {
    try {
        const { idMedia, mediaType, idUser } = req.params;

        await MediaService.deleteFromMyList(idMedia, mediaType, idUser);

        res.status(STATUS_HTTP.OK).json({ message: true });
    } catch (err) {
        res.status(STATUS_HTTP.ERROR).json({ message: err });
    }
});

router.get("/isInMyList/:idMedia/:mediaType/:idUser", async (req, res) => {
    try {
        const { idMedia, mediaType, idUser } = req.params;

        const inMyList = await MediaService.checkInMyList(idMedia, mediaType, idUser);

        res.status(STATUS_HTTP.OK).json({ message: inMyList });
    } catch (err) {
        res.status(STATUS_HTTP.ERROR).json({ message: err });
    }
});

module.exports = router;