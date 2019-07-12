const MediaMongo = require('../mongo/media');

class MediaService {

    async savetoMyList(data) {
        return await MediaMongo.saveToMyList(data);
    }

    async deleteFromMyList(id) {
        return await MediaMongo.delete(id);
    }

    async getMyList(id, query) {
        const query = {};
        
        return await MediaMongo.getAll(id, query);
    }

}

module.exports = new MediaService();