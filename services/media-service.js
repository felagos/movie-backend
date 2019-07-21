const MediaMongo = require('../mongo/media-mongo');

class MediaService {

    async savetoMyList(data) {
        try {
            const response = await MediaMongo.saveToMyList(data);
            console.log("response en el service", response);
            return response;
        } catch (err) {
            throw new Error(err);
        }
    }

    async deleteFromMyList(id) {
        return await MediaMongo.delete(id);
    }

    async getMyList(id) {
        const query = {};

        return await MediaMongo.getAll(id, query);
    }

}

module.exports = new MediaService();