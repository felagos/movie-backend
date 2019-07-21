const MediaMongo = require('../mongo/media-mongo');

class MediaService {

    async savetoMyList(data) {
        try {
            const response = await MediaMongo.saveToMyList(data);
            return response;
        } catch (err) {
            throw new Error(err);
        }
    }

    async deleteFromMyList(idMedia, mediaType, idUser) {
        try {
            idMedia = parseInt(idMedia);
            return await MediaMongo.deleteFromMyList(idMedia, mediaType, idUser);
        } catch (err) {
            throw new Error(err);
        }
    }

    async getMyList(idUser) {
        return await MediaMongo.getMyList(idUser);
    }

    async checkInMyList(idMedia, mediaType, idUser) {
        try {
            idMedia = parseInt(idMedia);
            return await MediaMongo.checkInMyList(idMedia, mediaType, idUser);
            
        } catch (err) {
            throw new Error(err);
        }
    }

}

module.exports = new MediaService();