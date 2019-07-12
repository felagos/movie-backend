const router = require('express').Router();
const { validatePost } = require('../middleware/media-middleware');
const MediaService = require('../services/media-service');
const { STATUS_HTTP } = require('../utils/constants');

router.post("/", validatePost, async (req, res) => {
    const data = req["body"];
    try {
        await MediaService.savetoMyList(data);
        res.status(STATUS_HTTP.CREATED).end();
    } catch (err) {
        res.status(STATUS_HTTP.ERROR).json({ error }).end();
    }
})

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await MediaService.getMyList(id);
        res.status(STATUS_HTTP.OK).end();
    } catch (err) {
        res.status(STATUS_HTTP.ERROR).json({ error }).end();
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await MediaService.deleteFromMyList(id);
        res.status(STATUS_HTTP.OK).end();
    } catch (err) {
        res.status(STATUS_HTTP.ERROR).json({ error }).end();
    }
});

module.exports = router;